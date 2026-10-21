import assert from "node:assert/strict";
import http from "node:http";
import { after, before, test } from "node:test";
import { ToltApi, ToltApiClient } from "../dist/index.js";

let server;
let tolt;
const requests = [];

before(async () => {
  server = http.createServer((req, res) => {
    requests.push(req);
    if (req.url === "/v2/partners/part_1") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ success: true, message: "ok", data: { id: "part_1", email: "sam@example.com" } }));
      return;
    }
    res.writeHead(404, { "content-type": "application/json", "Request-Id": "req_1" });
    res.end(JSON.stringify({ success: false, message: "Partner not found", code: "not_found", doc_url: "https://docs.tolt.com/errors#not_found" }));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  tolt = new ToltApiClient({ token: "tok_test", baseUrl: `http://127.0.0.1:${server.address().port}`, maxRetries: 0 });
});

after(() => server.close());

test("get sends the bearer token and returns the parsed envelope", async () => {
  const { data } = await tolt.partners.get({ id: "part_1" });
  assert.equal(data.id, "part_1");
  assert.equal(requests.at(-1).headers.authorization, "Bearer tok_test");
});

test("an error status throws its error class with the body", async () => {
  await assert.rejects(tolt.partners.get({ id: "part_missing" }), (err) => {
    assert.ok(err instanceof ToltApi.NotFoundError);
    assert.equal(err.statusCode, 404);
    assert.equal(err.body.code, "not_found");
    return true;
  });
});
