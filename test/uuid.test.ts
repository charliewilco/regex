import { describe, expect, it } from "bun:test";
import { UUIDRegex } from "../src/uuid";

describe("Universal Unique ID", () => {
  it("matches valid RFC 4122-style UUIDs", () => {
    const re = new UUIDRegex();

    expect(re.test("123e4567-e89b-12d3-a456-426655440000")).toBe(true);
    expect(re.test("c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd")).toBe(true);
    expect(re.test("C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD")).toBe(true);
  });

  it("rejects malformed or invalid-variant UUIDs", () => {
    const re = new UUIDRegex();

    expect(re.test("555-,,ny")).toBe(false);
    expect(re.test("definitely-not-a-uuid")).toBe(false);
    expect(re.test("xxx")).toBe(false);
    expect(re.test("c73bcdcc26694bf681d3e4ae73fb11fd")).toBe(false);
    expect(re.test("c73bcdcc-2669-0bf6-81d3-e4ae73fb11fd")).toBe(false);
    expect(re.test("c73bcdcc-2669-4bf6-11d3-e4ae73fb11fd")).toBe(false);
  });
});
