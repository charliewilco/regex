import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  EmailRegex,
  defineRegexPattern,
  emailPattern,
  isEmail,
  isEthereumAddress,
  isHTML,
  isIPv4Address,
  isIntlPhoneNumber,
  isSemanticVersion,
  isSlug,
  isUSPhoneNumber,
  isUUID,
  slugPattern,
} from "../src/index.ts";

describe("Regex patterns", () => {
  it("creates fresh exact RegExp instances from pattern objects", () => {
    const regex = slugPattern.create();

    assert.equal(regex.test("release-2026"), true);
    assert.equal(regex.test("release-2026!"), false);
    assert.equal(slugPattern.source, String.raw`[a-z0-9]+(?:-[a-z0-9]+)*`);
  });

  it("checks values with predicate helpers", () => {
    assert.equal(isEmail("charlie@example.com"), true);
    assert.equal(isEthereumAddress("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"), true);
    assert.equal(isHTML('<img src="https://example.com/cat.png" />'), true);
    assert.equal(isIPv4Address("192.168.1.1"), true);
    assert.equal(isUSPhoneNumber("(717) 242-6729"), true);
    assert.equal(isIntlPhoneNumber("+44 20 7946 0958"), true);
    assert.equal(isSemanticVersion("10.20.30-rc.1+build.5"), true);
    assert.equal(isSlug("hello-world"), true);
    assert.equal(isUUID("123e4567-e89b-12d3-a456-426655440000"), true);
  });

  it("keeps predicate helpers exact", () => {
    assert.equal(isEmail("prefix charlie@example.com"), false);
    assert.equal(isSlug("Hello World"), false);
    assert.equal(isUUID("c73bcdcc26694bf681d3e4ae73fb11fd"), false);
    assert.equal(isEthereumAddress("prefix 0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"), false);
    assert.equal(isHTML("prefix <p>test</p>"), false);
    assert.equal(isIPv4Address("prefix 192.168.1.1"), false);
    assert.equal(isUSPhoneNumber("prefix 717-242-6729"), false);
    assert.equal(isIntlPhoneNumber("prefix +44 20 7946 0958"), false);
    assert.equal(isSemanticVersion("prefix 1.0.0"), false);
  });

  it("supports custom pattern definitions", () => {
    const ticketPattern = defineRegexPattern(String.raw`[A-Z]+-\d+`);

    assert.equal(ticketPattern.test("BUG-123"), true);
    assert.equal(ticketPattern.test("BUG-123-extra"), false);
  });

  it("preserves RegExp subclass compatibility", () => {
    const regex = new EmailRegex();

    assert.ok(regex instanceof RegExp);
    assert.equal(regex.source, emailPattern.exactSource);
  });
});
