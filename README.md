# So You Think You Need A Regex

[![Unit Tests](https://github.com/charliewilco/regex/actions/workflows/node.yml/badge.svg)](https://github.com/charliewilco/regex/actions/workflows/node.yml)

Tiny `RegExp` subclasses for a handful of common string patterns.

This package is intentionally lightweight. These matchers are useful building blocks, but they are not a full validation framework and they should not be treated as standards-complete parsers.

## Install

```sh
bun add @charliewilco/regex
```

```sh
npm install @charliewilco/regex
```

## Usage

Each export is a small `RegExp` subclass, so you instantiate it once and use normal regular expression methods such as `.test()` and `.exec()`.

```ts
import {
  EmailRegex,
  EthereumAddressRegex,
  HTMLRegex,
  IPv4AddressRegex,
  IntlPhoneNumberRegex,
  SemanticVersionRegex,
  SlugRegex,
  USPhoneNumberRegex,
  UUIDRegex,
} from "@charliewilco/regex";

const email = new EmailRegex("i");
const wallet = new EthereumAddressRegex();
const html = new HTMLRegex();
const ip = new IPv4AddressRegex();
const usPhone = new USPhoneNumberRegex();
const intlPhone = new IntlPhoneNumberRegex();
const version = new SemanticVersionRegex();
const slug = new SlugRegex();
const uuid = new UUIDRegex();

email.test("hello@example.com");
wallet.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976F");
html.test('<img src="https://example.com/cat.png" />');
ip.test("192.168.1.1");
usPhone.test("717-242-6729");
intlPhone.test("+462345678901");
version.test("1.4.0-beta.2");
slug.test("hello-world");
uuid.test("123e4567-e89b-12d3-a456-426655440000");
```

## Included Patterns

- `EmailRegex`
- `EthereumAddressRegex`
- `HTMLRegex`
- `IPv4AddressRegex`
- `IntlPhoneNumberRegex`
- `SemanticVersionRegex`
- `SlugRegex`
- `USPhoneNumberRegex`
- `UUIDRegex`

## Development

```sh
bun install
bun run check
bun run build
```

The project now uses Bun for package management, scripts, and test execution.
