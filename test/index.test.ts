import { describe, it, xit, expect } from "@jest/globals";
import { EthereumAddressRegex, HTMLRegex, USPhoneNumberRegex } from "../src";

describe("Regex", () => {
  it("recognizes eth addresses", () => {
    const re = new EthereumAddressRegex();

    expect(re.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")).toBeTruthy();
    expect(re.test("xxx")).toBeFalsy();
  });

  xit("recognizes HTML", () => {
    const re = new HTMLRegex();
    expect(re.test("<html><body></body></html>")).toBeTruthy();
  });

  it("recognizes a Phone Number", () => {
    const re = new USPhoneNumberRegex();
    expect(re.test("717-242-6729")).toBeTruthy();
  });
});
