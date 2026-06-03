import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SlugRegex } from "../src/slug.ts";

describe("Slugs", () => {
  it("matches lowercase hyphenated slugs", () => {
    const re = new SlugRegex();

    assert.equal(re.test("hello-world"), true);
    assert.equal(re.test("release-2026"), true);
    assert.equal(re.test("a"), true);
  });

  it("rejects invalid slugs", () => {
    const re = new SlugRegex();

    assert.equal(re.test("Hello-World"), false);
    assert.equal(re.test("-hello-world"), false);
    assert.equal(re.test("hello-world-"), false);
    assert.equal(re.test("hello_world"), false);
  });
});
