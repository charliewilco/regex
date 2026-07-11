import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SlugRegex, slugPattern, isSlug } from "../src/slug.ts";

describe("Slugs", () => {
  it("matches lowercase hyphenated slugs", () => {
    const re = new SlugRegex();
    const validSlugs = [
      "hello-world",
      "release-2026",
      "a",
      "123",
      "a-b-c-d",
      "1-2-3-4"
    ];

    for (const slug of validSlugs) {
      assert.equal(re.test(slug), true, `Regex failed on: ${slug}`);
      assert.equal(slugPattern.test(slug), true, `Pattern failed on: ${slug}`);
      assert.equal(isSlug(slug), true, `isSlug failed on: ${slug}`);
    }
  });

  it("rejects invalid slugs", () => {
    const re = new SlugRegex();
    const invalidSlugs = [
      "Hello-World",
      "-hello-world",
      "hello-world-",
      "hello_world",
      "hello--world",
      "hello world",
      "hello@world",
      "prefix hello-world",
      "hello-world suffix"
    ];

    for (const slug of invalidSlugs) {
      assert.equal(re.test(slug), false, `Regex failed on: ${slug}`);
      assert.equal(slugPattern.test(slug), false, `Pattern failed on: ${slug}`);
      assert.equal(isSlug(slug), false, `isSlug failed on: ${slug}`);
    }
  });
});
