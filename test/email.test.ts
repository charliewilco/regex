import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EmailRegex, emailPattern, isEmail } from "../src/email.ts";

describe("Email addresses", () => {
  it("matches common email addresses", () => {
    const re = new EmailRegex();
    const validEmails = [
      "charlie@example.com",
      "they.them+regex@subdomain.example.dev",
      "letters-and_numbers%ok@example-domain.co.uk",
      "a.b.c@example.com",
      "123@456.com",
      "user_name@example.org"
    ];

    for (const email of validEmails) {
      assert.equal(re.test(email), true, `Regex failed on: ${email}`);
      assert.equal(emailPattern.test(email), true, `Pattern failed on: ${email}`);
      assert.equal(isEmail(email), true, `isEmail failed on: ${email}`);
    }
  });

  it("rejects malformed email addresses", () => {
    const re = new EmailRegex();
    const invalidEmails = [
      "charlie@example",
      "charlie at example.com",
      ".charlie@example.com",
      "charlie..wilco@example.com",
      "charlie@example-.com",
      "charlie@-example.com",
      "prefix charlie@example.com",
      "charlie@example.com suffix",
      "@",
      "user@.com"
    ];

    for (const email of invalidEmails) {
      assert.equal(re.test(email), false, `Regex failed on: ${email}`);
      assert.equal(emailPattern.test(email), false, `Pattern failed on: ${email}`);
      assert.equal(isEmail(email), false, `isEmail failed on: ${email}`);
    }
  });
});
