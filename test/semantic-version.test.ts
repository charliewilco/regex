import { describe, expect, it } from "bun:test";
import { SemanticVersionRegex } from "../src/semantic-version";

describe("Semantic versions", () => {
  it("matches valid semantic versions", () => {
    const re = new SemanticVersionRegex();

    expect(re.test("1.0.0")).toBe(true);
    expect(re.test("2.1.3-beta.1")).toBe(true);
    expect(re.test("10.20.30-rc.1+build.5")).toBe(true);
  });

  it("rejects invalid semantic versions", () => {
    const re = new SemanticVersionRegex();

    expect(re.test("1")).toBe(false);
    expect(re.test("1.0")).toBe(false);
    expect(re.test("01.2.3")).toBe(false);
    expect(re.test("1.2.3-01")).toBe(false);
  });
});
