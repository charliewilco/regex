import { describe, expect, it } from "bun:test";
import { IntlPhoneNumberRegex, USPhoneNumberRegex } from "../src/phone-numbers";

describe("Phone numbers", () => {
  it("matches common US phone number formats", () => {
    const re = new USPhoneNumberRegex();

    expect(re.test("717-242-6729")).toBe(true);
    expect(re.test("(717) 242-6729")).toBe(true);
    expect(re.test("+1 717 242 6729")).toBe(true);
    expect(re.test("7172426729")).toBe(true);
  });

  it("rejects invalid US phone numbers", () => {
    const re = new USPhoneNumberRegex();

    expect(re.test("555-,,ny")).toBe(false);
    expect(re.test("117-242-6729")).toBe(false);
    expect(re.test("017-242-6729")).toBe(false);
    expect(re.test("717-142-6729")).toBe(false);
    expect(re.test("717-242-672")).toBe(false);
  });

  it("matches international phone numbers", () => {
    const re = new IntlPhoneNumberRegex();

    expect(re.test("+462345678901")).toBe(true);
    expect(re.test("+44 20 7946 0958")).toBe(true);
    expect(re.test("+81-3-1234-5678")).toBe(true);
  });

  it("rejects invalid international phone numbers", () => {
    const re = new IntlPhoneNumberRegex();

    expect(re.test("nothing to see")).toBe(false);
    expect(re.test("462345678901")).toBe(false);
    expect(re.test("+12")).toBe(false);
    expect(re.test("+1 (717) 242-6729")).toBe(false);
  });
});
