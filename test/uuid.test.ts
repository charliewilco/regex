import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { UUIDRegex, uuidPattern, isUUID } from "../src/uuid.ts";

describe("Universal Unique ID", () => {
  it("matches valid RFC 4122-style UUIDs", () => {
    const re = new UUIDRegex();
    const validUUIDs = [
      "123e4567-e89b-12d3-a456-426655440000",
      "c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd",
      "C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD",
      "00000000-0000-1000-8000-000000000000",
      "ffffffff-ffff-8fff-bfff-ffffffffffff"
    ];

    for (const uuid of validUUIDs) {
      assert.equal(re.test(uuid), true, `Regex failed on: ${uuid}`);
      assert.equal(uuidPattern.test(uuid), true, `Pattern failed on: ${uuid}`);
      assert.equal(isUUID(uuid), true, `isUUID failed on: ${uuid}`);
    }
  });

  it("rejects malformed or invalid-variant UUIDs", () => {
    const re = new UUIDRegex();
    const invalidUUIDs = [
      "555-,,ny",
      "definitely-not-a-uuid",
      "xxx",
      "c73bcdcc26694bf681d3e4ae73fb11fd",
      "c73bcdcc-2669-0bf6-81d3-e4ae73fb11fd", // invalid version (0)
      "c73bcdcc-2669-4bf6-11d3-e4ae73fb11fd", // invalid variant (1)
      "c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd-", // trailing dash
      "-c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd", // leading dash
      "prefix c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd",
      "c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd suffix"
    ];

    for (const uuid of invalidUUIDs) {
      assert.equal(re.test(uuid), false, `Regex failed on: ${uuid}`);
      assert.equal(uuidPattern.test(uuid), false, `Pattern failed on: ${uuid}`);
      assert.equal(isUUID(uuid), false, `isUUID failed on: ${uuid}`);
    }
  });
});
