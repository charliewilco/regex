# So You Think You Need A Regex

[![Unit Tests](https://github.com/charliewilco/regex/actions/workflows/node.yml/badge.svg)](https://github.com/charliewilco/regex/actions/workflows/node.yml)

Tiny reusable regular expression patterns for common string formats.

This package is intentionally lightweight. These matchers are useful building blocks, but they are not a full validation framework and they should not be treated as standards-complete parsers.

This package now ships as ESM-only.

## Install

```sh
npm install @charliewilco/regex
```

```sh
pnpm add @charliewilco/regex
```

## Usage

Each pattern ships in three forms:

- a reusable pattern object, such as `emailPattern`
- a predicate helper, such as `isEmail(value)`
- a small `RegExp` subclass, such as `EmailRegex`

```ts
import { EmailRegex, emailPattern, isEmail, isSemanticVersion } from "@charliewilco/regex";

const email = new EmailRegex("i");

email.test("hello@example.com");
isEmail("hello@example.com");
isSemanticVersion("1.4.0-beta.2");

emailPattern.create("i").test("hello@example.com");
```

## Included Patterns

| Pattern                    | Pattern object           | Predicate           | RegExp subclass        |
| -------------------------- | ------------------------ | ------------------- | ---------------------- |
| Email address              | `emailPattern`           | `isEmail`           | `EmailRegex`           |
| Ethereum address           | `ethereumAddressPattern` | `isEthereumAddress` | `EthereumAddressRegex` |
| HTML snippet               | `htmlPattern`            | `isHTML`            | `HTMLRegex`            |
| IPv4 address               | `ipv4AddressPattern`     | `isIPv4Address`     | `IPv4AddressRegex`     |
| International phone number | `intlPhoneNumberPattern` | `isIntlPhoneNumber` | `IntlPhoneNumberRegex` |
| Semantic version           | `semanticVersionPattern` | `isSemanticVersion` | `SemanticVersionRegex` |
| Slug                       | `slugPattern`            | `isSlug`            | `SlugRegex`            |
| US phone number            | `usPhoneNumberPattern`   | `isUSPhoneNumber`   | `USPhoneNumberRegex`   |
| UUID                       | `uuidPattern`            | `isUUID`            | `UUIDRegex`            |

## Custom Patterns

Use `defineRegexPattern` when you want the same small API for a project-specific pattern.

```ts
import { defineRegexPattern } from "@charliewilco/regex";

const ticketPattern = defineRegexPattern(String.raw`[A-Z]+-\d+`);

ticketPattern.test("BUG-123");
ticketPattern.create().exec("BUG-123");
```

## Development

```sh
npm install
npm run check
npm run build
```

The project uses npm for package management and Node's built-in test runner for tests.
