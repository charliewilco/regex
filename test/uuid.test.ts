import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { UUIDRegex } from "../src/uuid.ts";

describe("Universal Unique ID", () => {
  it("matches valid RFC 4122-style UUIDs", () => {
    const re = new UUIDRegex();

    assert.equal(re.test("123e4567-e89b-12d3-a456-426655440000"), true);
    assert.equal(re.test("c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd"), true);
    assert.equal(re.test("C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD"), true);
  });

  it("rejects malformed or invalid-variant UUIDs", () => {
    const re = new UUIDRegex();

    assert.equal(re.test("555-,,ny"), false);
    assert.equal(re.test("definitely-not-a-uuid"), false);
    assert.equal(re.test("xxx"), false);
    assert.equal(re.test("c73bcdcc26694bf681d3e4ae73fb11fd"), false);
    assert.equal(re.test("c73bcdcc-2669-0bf6-81d3-e4ae73fb11fd"), false);
    assert.equal(re.test("c73bcdcc-2669-4bf6-11d3-e4ae73fb11fd"), false);
  });
});
