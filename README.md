# @tolt/api

TypeScript SDK for the [Tolt](https://tolt.com) public API (v2). Generated from our OpenAPI spec with [Fern](https://buildwithfern.com); do not edit by hand.

## Install

Not published to npm yet. For now, install from a packed tarball or straight from this repo:

```bash
npm install github:toltapp/tolt-typescript-sdk
```

## Usage

```ts
import { ToltApiClient } from "@tolt/api";

const client = new ToltApiClient({
  baseUrl: "https://api.tolt.com",
  token: process.env.TOLT_API_KEY!, // your Tolt API key
});

const transactions = await client.transactions.listTransactions();
const overview = await client.reports.overview();
const clicks = await client.clicks.listClicks();
```

Sub-clients cover the whole API: `transactions`, `commissions`, `customers`, `partners`, `programs`, `links`, `promotionCodes`, `groups`, `flows`, `clicks`, `reports`. Every path, request, and response is typed from the spec.

## Build

```bash
npm install   # runs the build via the prepare script
npm run build # -> dist/
```

## Regenerating

This package is generated. Regenerate it from the OpenAPI spec in the `tolt-sdks-v2` Fern workspace (`fern generate --local`).
