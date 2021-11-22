import { describe, it, expect } from "@jest/globals";
import { UUIDRegex } from "../src/uuid";

describe("Universal Unique ID", () => {
  it("valid uuids", () => {
    const re = new UUIDRegex();
    expect(re.test("123e4567-e89b-12d3-a456-426655440000")).toBeTruthy();
    expect(re.test("c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd")).toBeTruthy();
    expect(re.test("C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD")).toBeTruthy();
  });
  it("invalid uuids", () => {
    const re = new UUIDRegex();
    expect(re.test("555-,,ny")).toBeFalsy();
    expect(re.test("definitely-not-a-uuid")).toBeFalsy();
    expect(re.test("xxx")).toBeFalsy();
    expect(re.test("c73bcdcc26694bf681d3e4ae73fb11fd")).toBeFalsy();
  });
});

// 123e4567-e89b-12d3-a456-426655440000
// c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd
// C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD
// C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD
