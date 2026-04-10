import { describe, expect, it } from "bun:test";
import { SlugRegex } from "../src/slug";

describe("Slugs", () => {
  it("matches lowercase hyphenated slugs", () => {
    const re = new SlugRegex();

    expect(re.test("hello-world")).toBe(true);
    expect(re.test("release-2026")).toBe(true);
    expect(re.test("a")).toBe(true);
  });

  it("rejects invalid slugs", () => {
    const re = new SlugRegex();

    expect(re.test("Hello-World")).toBe(false);
    expect(re.test("-hello-world")).toBe(false);
    expect(re.test("hello-world-")).toBe(false);
    expect(re.test("hello_world")).toBe(false);
  });
});
