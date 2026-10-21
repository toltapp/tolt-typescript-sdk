## [1.1.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v1.0.0...v1.1.0) (2026-10-21)

### Features

* regenerate SDK from the latest OpenAPI spec ([#12](https://github.com/toltapp/tolt-typescript-sdk/issues/12)) ([9f0be5a](https://github.com/toltapp/tolt-typescript-sdk/commit/9f0be5af0236acdba45642daf14fd5f6d5f4a656))

## [1.0.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.7.0...v1.0.0) (2026-10-21)

### ⚠ BREAKING CHANGES

* Request and response types for single-item operations are
singular (GetPartnerRequest, ApprovePartnerResponse, CreateClickRequest).
embed.createToken() is now embedTokens.create(), reports.customerStats() is
now reports.customers(), and ToltApi.Error_ is now ToltApi.ErrorResponse.
list() returns a Page instead of the envelope: page.data still holds the
current rows, and has_more and next_cursor move to page.response.
groups.list({ default }) and flows.list({ active }) take booleans.

### Features

* regenerate SDK from the latest OpenAPI spec ([#10](https://github.com/toltapp/tolt-typescript-sdk/issues/10)) ([0f57c7f](https://github.com/toltapp/tolt-typescript-sdk/commit/0f57c7f2f81d1eb0c4b051c4092c76378617f596))

## [0.7.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.6.1...v0.7.0) (2026-10-21)

### Features

* regenerate SDK from the latest OpenAPI spec ([#7](https://github.com/toltapp/tolt-typescript-sdk/issues/7)) ([d81bb2b](https://github.com/toltapp/tolt-typescript-sdk/commit/d81bb2bbdaabac3d4bfcac0568987c9b195499c6))

## [0.6.1](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.6.0...v0.6.1) (2026-10-15)

### Bug Fixes

* republish with corrected README usage examples ([95b967e](https://github.com/toltapp/tolt-typescript-sdk/commit/95b967eebe3b688dc3d2b9db491850f2269aa99c))

## [0.6.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.5.0...v0.6.0) (2026-10-15)

### Features

* regenerate SDK from the latest OpenAPI spec ([#6](https://github.com/toltapp/tolt-typescript-sdk/issues/6)) ([1dc8cb2](https://github.com/toltapp/tolt-typescript-sdk/commit/1dc8cb2e6adfbb2695a2739ca64e5e6347c01002))

## [0.5.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.4.0...v0.5.0) (2026-09-28)

### Features

* regenerate SDK from the latest OpenAPI spec ([#5](https://github.com/toltapp/tolt-typescript-sdk/issues/5)) ([ddf74e6](https://github.com/toltapp/tolt-typescript-sdk/commit/ddf74e632d4fe700444e07766b5374a5d4870bb9))

## [0.4.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.3.0...v0.4.0) (2026-09-21)

### Features

* regenerate SDK from the latest OpenAPI spec ([#4](https://github.com/toltapp/tolt-typescript-sdk/issues/4)) ([bbca086](https://github.com/toltapp/tolt-typescript-sdk/commit/bbca086e1cbe59970bdae6b003621487bcb3f636))

## [0.3.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.2.0...v0.3.0) (2026-09-21)

### Features

* regenerate SDK from the latest OpenAPI spec ([#3](https://github.com/toltapp/tolt-typescript-sdk/issues/3)) ([bdc0673](https://github.com/toltapp/tolt-typescript-sdk/commit/bdc0673852b685771e92243364359bfe4609b004))

## [0.2.0](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.1.1...v0.2.0) (2026-08-27)

### Features

* regenerate SDK from the latest OpenAPI spec ([#2](https://github.com/toltapp/tolt-typescript-sdk/issues/2)) ([0a35f55](https://github.com/toltapp/tolt-typescript-sdk/commit/0a35f55718af84f0db44cbb320250e6d662de9e9))

## [0.1.1](https://github.com/toltapp/tolt-typescript-sdk/compare/v0.1.0...v0.1.1) (2026-08-27)

### Bug Fixes

* correct install instructions now that @tolt/api is on npm ([11591d8](https://github.com/toltapp/tolt-typescript-sdk/commit/11591d86cca8fce083c27136a3e07dd8af57445b))
