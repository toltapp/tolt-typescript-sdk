# Reference
## EmbedTokens
<details><summary><code>client.embedTokens.<a href="/src/api/resources/embedTokens/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreateEmbedTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mint a short-lived, partner-scoped token for the embedded referral dashboard. Safe to send to the browser.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.embedTokens.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreateEmbedTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmbedTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Groups
<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Group, ToltApi.ListGroupsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists partner groups. Filter by program or by the default group, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.groups.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.groups.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a partner group by ID, with the program it belongs to and whether it is the program's default group.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.get({
    id: "grp_zUQ8Pt281MsbNDApmDPN3Y2a"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Flows
<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Flow, ToltApi.ListFlowsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists flows. Filter by program, group, campaign, event or active state, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.flows.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.flows.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListFlowsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetFlowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a flow by ID, with the event it runs on, its conditions and its action: a commission to generate or a group to move the partner to.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.get({
    id: "flw_fAyK6FQ6EZngabgw8JifzQgN"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetFlowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Clicks
<details><summary><code>client.clicks.<a href="/src/api/resources/clicks/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Click, ToltApi.ListClicksResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists recorded clicks. Filter by program, partner, link, country, or device, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.clicks.list({
    country: "Canada",
    device: "desktop"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.clicks.list({
    country: "Canada",
    device: "desktop"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListClicksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClicksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clicks.<a href="/src/api/resources/clicks/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreateClickResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records a click on a partner's link from your own server, for visits the browser script cannot see. Identify the source by link_id, by partner_id with an optional link_id, or by the link's param and value; the partner and program are resolved from it. Pass the returned id as click_id when you create the customer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clicks.create({
    link_id: "lnk_mtTeeckFa1vMdvDFXretQNs6",
    country: "US",
    device: "desktop",
    page: "https://example.com/pricing?ref=sam",
    referrer: "https://partner.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreateClickRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClicksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clicks.<a href="/src/api/resources/clicks/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetClickResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a recorded click by ID, with the partner, link, page, referrer, country, device and browser it came from.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clicks.get({
    id: "clk_mEsbFYv6ZjqXjAoFwokjS6v6"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetClickRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClicksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partners
<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">bulkApprove</a>({ ...params }) -> ToltApi.BulkApprovePartnersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Approves up to 100 partners. Each id is processed on its own and the response reports the outcome per id, so one refused partner does not fail the request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.bulkApprove({
    ids: ["part_NLYzgNKuSuASvrvoxNtau6SY", "part_9fQ2xLLmN3kP8dRvT1wYbHcS"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.BulkApprovePartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">bulkReject</a>({ ...params }) -> ToltApi.BulkRejectPartnersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rejects up to 100 partners with an optional shared rejection note. Each id is processed on its own and the response reports the outcome per id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.bulkReject({
    ids: ["part_NLYzgNKuSuASvrvoxNtau6SY", "part_9fQ2xLLmN3kP8dRvT1wYbHcS"],
    rejection_note: "Site does not match our audience."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.BulkRejectPartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.PartnerDetails, ToltApi.ListPartnersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists onboarded partners. Filter by status, program or group, search by name, email or company, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.partners.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.partners.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListPartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreatePartnerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an onboarded partner together with their referral link. The link value defaults to a slug of the partner's name or email and the parameter to the program's first link parameter. Omit group_id to place the partner in the program's default group.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.create({
    email: "sam@example.com",
    program_id: "prg_T6z8aRW3XCmvFWP972RKxpAd",
    first_name: "Sam",
    last_name: "Taylor",
    group_id: "grp_zUQ8Pt281MsbNDApmDPN3Y2a",
    link: {
        value: "sam",
        param: "ref"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreatePartnerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetPartnerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a partner by ID, with their profile, status, group and program.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.get({
    id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetPartnerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">update</a>({ ...params }) -> ToltApi.UpdatePartnerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edits profile fields and group membership. Status changes go through the approve, reject and suspend actions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.update({
    id: "part_NLYzgNKuSuASvrvoxNtau6SY",
    first_name: "Sam",
    last_name: "Taylor",
    group_id: "grp_zUQ8Pt281MsbNDApmDPN3Y2a"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.UpdatePartnerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">approve</a>({ ...params }) -> ToltApi.ApprovePartnerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Makes the partner active. A partner who was not already active is sent the program's approval email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.approve({
    id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ApprovePartnerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">reject</a>({ ...params }) -> ToltApi.RejectPartnerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rejects the partner. A partner who was not already rejected is sent the program's rejection email with the note.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.reject({
    id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.RejectPartnerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">suspend</a>({ ...params }) -> ToltApi.SuspendPartnerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Suspends the partner, with an optional suspension_reason. Use the approve action to make them active again.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.suspend({
    id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.SuspendPartnerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Programs
<details><summary><code>client.programs.<a href="/src/api/resources/programs/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Program, ToltApi.ListProgramsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the programs in your organization, with search, date filters and cursor pagination.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.programs.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.programs.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListProgramsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProgramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.programs.<a href="/src/api/resources/programs/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetProgramResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a program by ID, with its name, currency, website, cookie duration and payout terms.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.programs.get({
    id: "prg_T6z8aRW3XCmvFWP972RKxpAd"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetProgramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProgramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Customers
<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Customer, ToltApi.ListCustomersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists customers. Filter by program, partner, link, click, status or your own customer_id, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.customers.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.customers.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListCustomersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreateCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a customer attributed to a partner. Pass partner_id or link_id, and optionally the click_id that brought them in.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.create({
    email: "alex@example.com",
    name: "Alex Morgan",
    customer_id: "user_4821",
    link_id: "lnk_mtTeeckFa1vMdvDFXretQNs6",
    partner_id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreateCustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a customer by ID, with its status, the partner it is attributed to and your own customer and subscription IDs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.get({
    id: "cus_LBfjvtfct9pVUeLojMHiGnXv"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetCustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">update</a>({ ...params }) -> ToltApi.UpdateCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a customer's name, email, status, your own IDs, or the click and link the customer came from.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.update({
    id: "cus_LBfjvtfct9pVUeLojMHiGnXv",
    name: "Alex Morgan",
    status: "active"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.UpdateCustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">delete</a>({ ...params }) -> ToltApi.DeleteCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a customer. Fails when any of the customer's commissions is paid or already included in a payout.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.delete({
    id: "cus_LBfjvtfct9pVUeLojMHiGnXv"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.DeleteCustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Commissions
<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">bulkApprove</a>({ ...params }) -> ToltApi.BulkApproveCommissionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Approves up to 100 commissions and reports the outcome per id. Successful changes and affected draft invoice totals commit together.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.bulkApprove({
    ids: ["comm_X85RLnefjTCNrypH4MA1PdSp", "comm_3RtV9kQ2mW8nX5pL1sB7cD4f"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.BulkApproveCommissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">bulkDecline</a>({ ...params }) -> ToltApi.BulkDeclineCommissionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Declines up to 100 commissions and reports the outcome per id. Successful changes and affected draft invoice totals commit together.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.bulkDecline({
    ids: ["comm_X85RLnefjTCNrypH4MA1PdSp", "comm_3RtV9kQ2mW8nX5pL1sB7cD4f"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.BulkDeclineCommissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Commission, ToltApi.ListCommissionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists commissions. Filter by program, partner, customer, transaction, status or type, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.commissions.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.commissions.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListCommissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreateCommissionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Supports historical created_at values. Status defaults to approved when omitted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.create({
    amount: 1000,
    customer_id: "cus_LBfjvtfct9pVUeLojMHiGnXv",
    revenue: 5000,
    status: "approved",
    source: "api",
    transaction_id: "txn_fB3egT1sKNVNu3ZYuU1ypYDA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreateCommissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetCommissionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a commission by ID, with its amount, status, type and partner, plus its customer and transaction when it has them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.get({
    id: "comm_X85RLnefjTCNrypH4MA1PdSp"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetCommissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">update</a>({ ...params }) -> ToltApi.UpdateCommissionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unpaid commissions can be changed unless linked to a confirmed invoice or legacy autopayout invoice. Affected draft invoice totals are recalculated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.update({
    id: "comm_X85RLnefjTCNrypH4MA1PdSp",
    amount: 1000,
    revenue: 5000,
    status: "approved"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.UpdateCommissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">delete</a>({ ...params }) -> ToltApi.DeleteCommissionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a commission. Fails for paid commissions, refund commissions, commissions on a refunded transaction, and those on a confirmed or legacy autopayout invoice.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.delete({
    id: "comm_X85RLnefjTCNrypH4MA1PdSp"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.DeleteCommissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">approve</a>({ ...params }) -> ToltApi.ApproveCommissionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks a commission approved so it is included in the next payout. Fails for paid commissions, refund commissions, commissions on a refunded transaction, and those on a confirmed or legacy autopayout invoice.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.approve({
    id: "comm_X85RLnefjTCNrypH4MA1PdSp"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ApproveCommissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.commissions.<a href="/src/api/resources/commissions/client/Client.ts">decline</a>({ ...params }) -> ToltApi.DeclineCommissionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks a commission declined so it is left out of payouts until it is approved again. Fails for paid commissions, refund commissions, commissions on a refunded transaction, and those on a confirmed or legacy autopayout invoice.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commissions.decline({
    id: "comm_X85RLnefjTCNrypH4MA1PdSp"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.DeclineCommissionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transactions
<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Transaction, ToltApi.ListTransactionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists transactions. Filter by program, partner, customer or status, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transactions.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transactions.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreateTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Supports historical created_at values. product_id and product_name are stored and returned in product_ids and product_names arrays.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.create({
    product_id: "prod_pro",
    product_name: "Pro plan",
    amount: 5000,
    customer_id: "cus_LBfjvtfct9pVUeLojMHiGnXv",
    billing_type: "subscription",
    interval: "month",
    source: "api"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreateTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a transaction by ID, with its amount, status, billing details, products and the customer it belongs to.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.get({
    id: "txn_fB3egT1sKNVNu3ZYuU1ypYDA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">update</a>({ ...params }) -> ToltApi.UpdateTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a transaction's amount, status, billing or product details. Refunded transactions cannot be modified.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.update({
    id: "txn_fB3egT1sKNVNu3ZYuU1ypYDA",
    amount: 5000,
    product_name: "Pro plan"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.UpdateTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">delete</a>({ ...params }) -> ToltApi.DeleteTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a transaction. Refunded transactions and transactions that already have commissions cannot be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.delete({
    id: "txn_fB3egT1sKNVNu3ZYuU1ypYDA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.DeleteTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">refund</a>({ ...params }) -> ToltApi.RefundTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unpaid commissions are zeroed while preserving their original deducted commission amount, and affected draft invoices are recalculated. Paid commissions and commissions linked to legacy autopayout invoices receive a negative reversal.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.refund({
    id: "txn_fB3egT1sKNVNu3ZYuU1ypYDA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.RefundTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">rerunFlows</a>({ ...params }) -> ToltApi.RerunTransactionFlowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-queues the transaction for asynchronous flow processing. Only transactions without an existing commission are eligible, so a rerun cannot create a duplicate commission.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.rerunFlows({
    id: "txn_fB3egT1sKNVNu3ZYuU1ypYDA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.RerunTransactionFlowsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Links
<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.Link, ToltApi.ListLinksResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists ordinary links. Campaign-managed links are excluded.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.links.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.links.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListLinksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreateLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a referral link for a partner. The value must be unique for its parameter, and param defaults to the program's.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.create({
    value: "sam",
    param: "ref",
    partner_id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreateLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">getByParamValue</a>({ ...params }) -> ToltApi.GetLinkByParamValueResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Looks up a single link by its parameter and value (value matched case-insensitively). Returns 404 when none matches.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.getByParamValue({
    param: "ref",
    value: "sam"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetLinkByParamValueRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an ordinary or campaign-managed link by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.get({
    id: "lnk_mtTeeckFa1vMdvDFXretQNs6"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">update</a>({ ...params }) -> ToltApi.UpdateLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an ordinary link. Campaign-managed links must be changed through campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.update({
    id: "lnk_mtTeeckFa1vMdvDFXretQNs6",
    param: "ref",
    value: "sam"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.UpdateLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">delete</a>({ ...params }) -> ToltApi.DeleteLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an ordinary link. Campaign-managed links must be changed through campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.delete({
    id: "lnk_mtTeeckFa1vMdvDFXretQNs6"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.DeleteLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PromotionCodes
<details><summary><code>client.promotionCodes.<a href="/src/api/resources/promotionCodes/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;ToltApi.PromotionCode, ToltApi.ListPromotionCodesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists promotion codes. Filter by program, partner or type, and page with cursors.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.promotionCodes.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.promotionCodes.list();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ListPromotionCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promotionCodes.<a href="/src/api/resources/promotionCodes/client/Client.ts">create</a>({ ...params }) -> ToltApi.CreatePromotionCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a promotion code for a partner, so customers who use it are credited to them. A partner cannot have the same code twice.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCodes.create({
    code: "SAM20",
    type: "percentage",
    value: "20",
    partner_id: "part_NLYzgNKuSuASvrvoxNtau6SY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.CreatePromotionCodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promotionCodes.<a href="/src/api/resources/promotionCodes/client/Client.ts">get</a>({ ...params }) -> ToltApi.GetPromotionCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a promotion code by ID, with its discount type and value and the partner, group or program it belongs to.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCodes.get({
    id: "promo_gTCAUsWfdmN2GuCVRaHWNRan"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.GetPromotionCodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promotionCodes.<a href="/src/api/resources/promotionCodes/client/Client.ts">update</a>({ ...params }) -> ToltApi.UpdatePromotionCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a promotion code's code, discount type or value.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCodes.update({
    id: "promo_gTCAUsWfdmN2GuCVRaHWNRan",
    code: "SAM20",
    type: "percentage",
    value: "20"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.UpdatePromotionCodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promotionCodes.<a href="/src/api/resources/promotionCodes/client/Client.ts">delete</a>({ ...params }) -> ToltApi.DeletePromotionCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a promotion code, so customers who use it afterwards are no longer attributed through it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promotionCodes.delete({
    id: "promo_gTCAUsWfdmN2GuCVRaHWNRan"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.DeletePromotionCodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromotionCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Reports
<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">overview</a>({ ...params }) -> ToltApi.ReportsOverviewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns revenue, commission, customer and partner totals for the organization or one program over a date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.overview();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ReportsOverviewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">partners</a>({ ...params }) -> core.Page&lt;ToltApi.ReportsPartnerRow, ToltApi.ReportsPartnersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one row of revenue, commissions, customers and clicks per partner over a date range, sorted and paged by offset.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.partners();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.partners();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ReportsPartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">links</a>({ ...params }) -> core.Page&lt;ToltApi.ReportsLinkRow, ToltApi.ReportsLinksResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one row of revenue, commissions, customers and clicks per link over a date range, sorted and paged by offset.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reports.links();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reports.links();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ReportsLinksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">timeseries</a>({ ...params }) -> ToltApi.ReportsTimeseriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns revenue, commissions, customers and clicks per day, week or month over a date range, ready to chart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.timeseries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ReportsTimeseriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">customers</a>({ ...params }) -> ToltApi.ReportsCustomersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns how many customers are in each subscription status for the organization or one program.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.customers();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ToltApi.ReportsCustomersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

