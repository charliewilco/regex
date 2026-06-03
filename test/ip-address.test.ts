import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { IPv4AddressRegex } from "../src/ip-address.ts";

describe("IPv4 addresses", () => {
  it("matches valid IPv4 addresses", () => {
    const re = new IPv4AddressRegex();

    assert.equal(re.test("127.0.0.1"), true);
    assert.equal(re.test("192.168.1.1"), true);
    assert.equal(re.test("255.255.255.255"), true);
  });

  it("rejects invalid IPv4 addresses", () => {
    const re = new IPv4AddressRegex();

    assert.equal(re.test("256.0.0.1"), false);
    assert.equal(re.test("192.168.1"), false);
    assert.equal(re.test("192.168.1.01"), false);
    assert.equal(re.test("example.com"), false);
  });
});
