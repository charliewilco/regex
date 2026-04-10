import { describe, expect, it } from "bun:test";
import { EmailRegex } from "../src/email";

describe("Email addresses", () => {
  it("matches common email addresses", () => {
    const re = new EmailRegex();

    expect(re.test("charlie@example.com")).toBe(true);
    expect(re.test("they.them+regex@subdomain.example.dev")).toBe(true);
    expect(re.test("letters-and_numbers%ok@example-domain.co.uk")).toBe(true);
  });

  it("rejects malformed email addresses", () => {
    const re = new EmailRegex();

    expect(re.test("charlie@example")).toBe(false);
    expect(re.test("charlie at example.com")).toBe(false);
    expect(re.test(".charlie@example.com")).toBe(false);
    expect(re.test("charlie..wilco@example.com")).toBe(false);
    expect(re.test("charlie@example-.com")).toBe(false);
    expect(re.test("charlie@-example.com")).toBe(false);
  });
});
