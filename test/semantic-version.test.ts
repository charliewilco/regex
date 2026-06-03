import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SemanticVersionRegex } from "../src/semantic-version.ts";

describe("Semantic versions", () => {
  it("matches valid semantic versions", () => {
    const re = new SemanticVersionRegex();

    assert.equal(re.test("1.0.0"), true);
    assert.equal(re.test("2.1.3-beta.1"), true);
    assert.equal(re.test("10.20.30-rc.1+build.5"), true);
  });

  it("rejects invalid semantic versions", () => {
    const re = new SemanticVersionRegex();

    assert.equal(re.test("1"), false);
    assert.equal(re.test("1.0"), false);
    assert.equal(re.test("01.2.3"), false);
    assert.equal(re.test("1.2.3-01"), false);
  });
});
