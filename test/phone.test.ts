import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { IntlPhoneNumberRegex, USPhoneNumberRegex } from "../src/phone-numbers.ts";

describe("Phone numbers", () => {
  it("matches common US phone number formats", () => {
    const re = new USPhoneNumberRegex();

    assert.equal(re.test("717-242-6729"), true);
    assert.equal(re.test("(717) 242-6729"), true);
    assert.equal(re.test("+1 717 242 6729"), true);
    assert.equal(re.test("7172426729"), true);
  });

  it("rejects invalid US phone numbers", () => {
    const re = new USPhoneNumberRegex();

    assert.equal(re.test("555-,,ny"), false);
    assert.equal(re.test("117-242-6729"), false);
    assert.equal(re.test("017-242-6729"), false);
    assert.equal(re.test("717-142-6729"), false);
    assert.equal(re.test("717-242-672"), false);
  });

  it("matches international phone numbers", () => {
    const re = new IntlPhoneNumberRegex();

    assert.equal(re.test("+462345678901"), true);
    assert.equal(re.test("+44 20 7946 0958"), true);
    assert.equal(re.test("+81-3-1234-5678"), true);
  });

  it("rejects invalid international phone numbers", () => {
    const re = new IntlPhoneNumberRegex();

    assert.equal(re.test("nothing to see"), false);
    assert.equal(re.test("462345678901"), false);
    assert.equal(re.test("+12"), false);
    assert.equal(re.test("+1 (717) 242-6729"), false);
  });
});
