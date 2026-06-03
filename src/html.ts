import { defineRegexPattern } from "./pattern.ts";

const HTML_ATTRIBUTE = String.raw`[A-Za-z_:][A-Za-z0-9:._-]*(?:=(?:"[^"]*"|'[^']*'))?`;
const HTML_PAIRED_TAG = String.raw`<(a|b|em|p|span|strong)(?:\s+${HTML_ATTRIBUTE})*\s*>[^<>]*<\/\1\s*>`;
const HTML_IMAGE_TAG = String.raw`<img(?:\s+${HTML_ATTRIBUTE})*\s*\/?>`;

export const htmlPattern = defineRegexPattern(
  String.raw`(?:${HTML_PAIRED_TAG}|${HTML_IMAGE_TAG})`,
);

export function isHTML(value: string, flags?: string): boolean {
  return htmlPattern.test(value, flags);
}

export class HTMLRegex extends RegExp {
  constructor(flags?: string) {
    super(htmlPattern.exactSource, flags);
  }
}
