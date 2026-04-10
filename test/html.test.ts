import { describe, expect, it } from "bun:test";
import { HTMLRegex } from "../src/html";

describe("HTMLRegex", () => {
  it("matches supported paired and self-closing tags", () => {
    const re = new HTMLRegex();

    expect(re.test("<p>Hello world</p>")).toBeTrue();
    expect(re.test('<a href="https://example.com">Visit</a>')).toBeTrue();
    expect(re.test('<img src="https://example.com/cat.png" alt="Cat" />')).toBeTrue();
  });

  it("rejects unsupported or malformed HTML snippets", () => {
    const re = new HTMLRegex();

    expect(re.test("just words")).toBeFalse();
    expect(re.test("<section>Hello world</section>")).toBeFalse();
    expect(re.test('<img src="https://example.com/cat.png"> trailing')).toBeFalse();
    expect(re.test("<a href=https://example.com>Visit</a>")).toBeFalse();
  });
});
