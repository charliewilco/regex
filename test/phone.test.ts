import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  IntlPhoneNumberRegex,
  USPhoneNumberRegex,
  usPhoneNumberPattern,
  isUSPhoneNumber,
  intlPhoneNumberPattern,
  isIntlPhoneNumber
} from "../src/phone-numbers.ts";

describe("Phone numbers", () => {
  it("matches common US phone number formats", () => {
    const re = new USPhoneNumberRegex();
    const validPhones = [
      "717-242-6729",
      "(717) 242-6729",
      "+1 717 242 6729",
      "7172426729",
      "1-717-242-6729"
    ];

    for (const phone of validPhones) {
      assert.equal(re.test(phone), true, `Regex failed on: ${phone}`);
      assert.equal(usPhoneNumberPattern.test(phone), true, `Pattern failed on: ${phone}`);
      assert.equal(isUSPhoneNumber(phone), true, `isUSPhoneNumber failed on: ${phone}`);
    }
  });

  it("rejects invalid US phone numbers", () => {
    const re = new USPhoneNumberRegex();
    const invalidPhones = [
      "555-,,ny",
      "117-242-6729", // invalid area code
      "017-242-6729",
      "717-142-6729", // invalid prefix
      "717-242-672",  // too short
      "prefix 717-242-6729",
      "717-242-6729 suffix",
      "+2 717 242 6729" // wrong country code
    ];

    for (const phone of invalidPhones) {
      assert.equal(re.test(phone), false, `Regex failed on: ${phone}`);
      assert.equal(usPhoneNumberPattern.test(phone), false, `Pattern failed on: ${phone}`);
      assert.equal(isUSPhoneNumber(phone), false, `isUSPhoneNumber failed on: ${phone}`);
    }
  });

  it("matches international phone numbers", () => {
    const re = new IntlPhoneNumberRegex();
    const validPhones = [
      "+462345678901",
      "+44 20 7946 0958",
      "+81-3-1234-5678",
      "+1-717-242-6729",
      "+91 98765 43210"
    ];

    for (const phone of validPhones) {
      assert.equal(re.test(phone), true, `Regex failed on: ${phone}`);
      assert.equal(intlPhoneNumberPattern.test(phone), true, `Pattern failed on: ${phone}`);
      assert.equal(isIntlPhoneNumber(phone), true, `isIntlPhoneNumber failed on: ${phone}`);
    }
  });

  it("rejects invalid international phone numbers", () => {
    const re = new IntlPhoneNumberRegex();
    const invalidPhones = [
      "nothing to see",
      "462345678901", // missing +
      "+12", // too short
      "+1 (717) 242-6729", // no parens allowed in intl format
      "prefix +44 20 7946 0958",
      "+44 20 7946 0958 suffix",
      "+12345678901234567" // too long
    ];

    for (const phone of invalidPhones) {
      assert.equal(re.test(phone), false, `Regex failed on: ${phone}`);
      assert.equal(intlPhoneNumberPattern.test(phone), false, `Pattern failed on: ${phone}`);
      assert.equal(isIntlPhoneNumber(phone), false, `isIntlPhoneNumber failed on: ${phone}`);
    }
  });
});
