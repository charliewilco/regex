import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SemanticVersionRegex, semanticVersionPattern, isSemanticVersion } from "../src/semantic-version.ts";

describe("Semantic versions", () => {
  it("matches valid semantic versions", () => {
    const re = new SemanticVersionRegex();
    const validVersions = [
      "1.0.0",
      "2.1.3-beta.1",
      "10.20.30-rc.1+build.5",
      "0.0.0",
      "999.999.999",
      "1.0.0-alpha",
      "1.0.0-0.3.7",
      "1.0.0-x.7.z.92",
      "1.0.0+20130313144700",
      "1.0.0-beta+exp.sha.5114f85"
    ];

    for (const version of validVersions) {
      assert.equal(re.test(version), true, `Regex failed on: ${version}`);
      assert.equal(semanticVersionPattern.test(version), true, `Pattern failed on: ${version}`);
      assert.equal(isSemanticVersion(version), true, `isSemanticVersion failed on: ${version}`);
    }
  });

  it("rejects invalid semantic versions", () => {
    const re = new SemanticVersionRegex();
    const invalidVersions = [
      "1",
      "1.0",
      "01.2.3",
      "1.2.3-01",
      "1.2.03",
      "prefix 1.0.0",
      "1.0.0 suffix",
      "v1.0.0",
      "1.0.0-@",
      "1.0.0+"
    ];

    for (const version of invalidVersions) {
      assert.equal(re.test(version), false, `Regex failed on: ${version}`);
      assert.equal(semanticVersionPattern.test(version), false, `Pattern failed on: ${version}`);
      assert.equal(isSemanticVersion(version), false, `isSemanticVersion failed on: ${version}`);
    }
  });
});
