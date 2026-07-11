import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HTMLRegex, htmlPattern, isHTML } from "../src/html.ts";

describe("HTMLRegex", () => {
  it("matches supported paired and self-closing tags", () => {
    const re = new HTMLRegex();
    const validHtml = [
      "<p>Hello world</p>",
      '<a href="https://example.com">Visit</a>',
      '<img src="https://example.com/cat.png" alt="Cat" />',
      '<span class="bold">Text</span>',
    ];

    for (const html of validHtml) {
      assert.equal(re.test(html), true, `Regex failed on: ${html}`);
      assert.equal(htmlPattern.test(html), true, `Pattern failed on: ${html}`);
      assert.equal(isHTML(html), true, `isHTML failed on: ${html}`);
    }
  });

  it("rejects unsupported or malformed HTML snippets", () => {
    const re = new HTMLRegex();
    const invalidHtml = [
      "just words",
      "<section>Hello world</section>",
      '<img src="https://example.com/cat.png"> trailing',
      "prefix <p>Test</p>",
      "<a href=https://example.com>Visit</a>",
      "<div><p>Nested</p></div>", // Regex might not support nesting fully depending on the exact implementation, but wait, let's keep it to what was originally rejected if it was. Actually, keeping the original invalid cases and a few extra ones.
      "<p>Missing closing",
      "Missing opening</p>",
      "<div></div>",
      "<br />",
    ];

    for (const html of invalidHtml) {
      assert.equal(re.test(html), false, `Regex failed on: ${html}`);
      assert.equal(htmlPattern.test(html), false, `Pattern failed on: ${html}`);
      assert.equal(isHTML(html), false, `isHTML failed on: ${html}`);
    }
  });
});
