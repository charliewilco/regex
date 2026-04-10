import { describe, expect, it } from "bun:test";
import { IPv4AddressRegex } from "../src/ip-address";

describe("IPv4 addresses", () => {
  it("matches valid IPv4 addresses", () => {
    const re = new IPv4AddressRegex();

    expect(re.test("127.0.0.1")).toBe(true);
    expect(re.test("192.168.1.1")).toBe(true);
    expect(re.test("255.255.255.255")).toBe(true);
  });

  it("rejects invalid IPv4 addresses", () => {
    const re = new IPv4AddressRegex();

    expect(re.test("256.0.0.1")).toBe(false);
    expect(re.test("192.168.1")).toBe(false);
    expect(re.test("192.168.1.01")).toBe(false);
    expect(re.test("example.com")).toBe(false);
  });
});
