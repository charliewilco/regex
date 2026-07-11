import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  EthereumAddressRegex,
  ethereumAddressPattern,
  isEthereumAddress,
} from "../src/ethereum.ts";

describe("Eth addresses", () => {
  it("recognizes Ethereum addresses", () => {
    const re = new EthereumAddressRegex();
    const validAddresses = [
      "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
      "0x0000000000000000000000000000000000000000",
    ];

    for (const addr of validAddresses) {
      assert.equal(re.test(addr), true, `Regex failed on: ${addr}`);
      assert.equal(ethereumAddressPattern.test(addr), true, `Pattern failed on: ${addr}`);
      assert.equal(isEthereumAddress(addr), true, `isEthereumAddress failed on: ${addr}`);
    }
  });

  it("rejects invalid Ethereum addresses", () => {
    const re = new EthereumAddressRegex();
    const invalidAddresses = [
      "555-,,ny",
      "xxx",
      "0x71C7656EC7ab88b098defB751B7401B5f6d8976", // too short
      "0x71C7656EC7ab88b098defB751B7401B5f6d8976F0", // too long
      "prefix-0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
      "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe suffix",
      "0xZZZ7656EC7ab88b098defB751B7401B5f6d8976F", // invalid characters
    ];

    for (const addr of invalidAddresses) {
      assert.equal(re.test(addr), false, `Regex failed on: ${addr}`);
      assert.equal(ethereumAddressPattern.test(addr), false, `Pattern failed on: ${addr}`);
      assert.equal(isEthereumAddress(addr), false, `isEthereumAddress failed on: ${addr}`);
    }
  });
});
