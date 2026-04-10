const HTML_ATTRIBUTE = String.raw`[A-Za-z_:][A-Za-z0-9:._-]*(?:=(?:"[^"]*"|'[^']*'))?`;
const HTML_PAIRED_TAG = String.raw`<(a|b|em|p|span|strong)(?:\s+${HTML_ATTRIBUTE})*\s*>[^<>]*<\/\1\s*>`;
const HTML_IMAGE_TAG = String.raw`<img(?:\s+${HTML_ATTRIBUTE})*\s*\/?>`;

export class HTMLRegex extends RegExp {
  constructor(flags?: string) {
    super(new RegExp(`^(?:${HTML_PAIRED_TAG}|${HTML_IMAGE_TAG})$`, flags));
  }
}
