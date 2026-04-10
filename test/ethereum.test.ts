import { describe, expect, it } from "bun:test";
import { EthereumAddressRegex } from "../src/ethereum";

describe("Eth addresses", () => {
  it("recognizes Ethereum addresses", () => {
    const re = new EthereumAddressRegex();

    expect(re.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")).toBe(true);
    expect(re.test("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe")).toBe(true);
  });

  it("rejects invalid Ethereum addresses", () => {
    const re = new EthereumAddressRegex();

    expect(re.test("555-,,ny")).toBe(false);
    expect(re.test("xxx")).toBe(false);
    expect(re.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976")).toBe(false);
    expect(re.test("prefix-0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe")).toBe(false);
  });
});
