import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { IPv4AddressRegex, ipv4AddressPattern, isIPv4Address } from "../src/ip-address.ts";

describe("IPv4 addresses", () => {
  it("matches valid IPv4 addresses", () => {
    const re = new IPv4AddressRegex();
    const validIps = ["127.0.0.1", "192.168.1.1", "255.255.255.255", "0.0.0.0", "10.0.0.1"];

    for (const ip of validIps) {
      assert.equal(re.test(ip), true, `Regex failed on: ${ip}`);
      assert.equal(ipv4AddressPattern.test(ip), true, `Pattern failed on: ${ip}`);
      assert.equal(isIPv4Address(ip), true, `isIPv4Address failed on: ${ip}`);
    }
  });

  it("rejects invalid IPv4 addresses", () => {
    const re = new IPv4AddressRegex();
    const invalidIps = [
      "256.0.0.1",
      "192.168.1",
      "192.168.1.01",
      "example.com",
      "prefix 127.0.0.1",
      "127.0.0.1 suffix",
      "255.255.255.256",
      "1.2.3.4.5",
    ];

    for (const ip of invalidIps) {
      assert.equal(re.test(ip), false, `Regex failed on: ${ip}`);
      assert.equal(ipv4AddressPattern.test(ip), false, `Pattern failed on: ${ip}`);
      assert.equal(isIPv4Address(ip), false, `isIPv4Address failed on: ${ip}`);
    }
  });
});
