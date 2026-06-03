import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EmailRegex } from "../src/email.ts";

describe("Email addresses", () => {
  it("matches common email addresses", () => {
    const re = new EmailRegex();

    assert.equal(re.test("charlie@example.com"), true);
    assert.equal(re.test("they.them+regex@subdomain.example.dev"), true);
    assert.equal(re.test("letters-and_numbers%ok@example-domain.co.uk"), true);
  });

  it("rejects malformed email addresses", () => {
    const re = new EmailRegex();

    assert.equal(re.test("charlie@example"), false);
    assert.equal(re.test("charlie at example.com"), false);
    assert.equal(re.test(".charlie@example.com"), false);
    assert.equal(re.test("charlie..wilco@example.com"), false);
    assert.equal(re.test("charlie@example-.com"), false);
    assert.equal(re.test("charlie@-example.com"), false);
  });
});
