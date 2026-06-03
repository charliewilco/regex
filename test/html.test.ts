import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HTMLRegex } from "../src/html.ts";

describe("HTMLRegex", () => {
  it("matches supported paired and self-closing tags", () => {
    const re = new HTMLRegex();

    assert.equal(re.test("<p>Hello world</p>"), true);
    assert.equal(re.test('<a href="https://example.com">Visit</a>'), true);
    assert.equal(re.test('<img src="https://example.com/cat.png" alt="Cat" />'), true);
  });

  it("rejects unsupported or malformed HTML snippets", () => {
    const re = new HTMLRegex();

    assert.equal(re.test("just words"), false);
    assert.equal(re.test("<section>Hello world</section>"), false);
    assert.equal(re.test('<img src="https://example.com/cat.png"> trailing'), false);
    assert.equal(re.test("<a href=https://example.com>Visit</a>"), false);
  });
});
