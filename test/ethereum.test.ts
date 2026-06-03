import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EthereumAddressRegex } from "../src/ethereum.ts";

describe("Eth addresses", () => {
  it("recognizes Ethereum addresses", () => {
    const re = new EthereumAddressRegex();

    assert.equal(re.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976F"), true);
    assert.equal(re.test("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"), true);
  });

  it("rejects invalid Ethereum addresses", () => {
    const re = new EthereumAddressRegex();

    assert.equal(re.test("555-,,ny"), false);
    assert.equal(re.test("xxx"), false);
    assert.equal(re.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976"), false);
    assert.equal(re.test("prefix-0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe"), false);
  });
});
