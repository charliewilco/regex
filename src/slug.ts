import { defineRegexPattern } from "./pattern.ts";

export const slugPattern = defineRegexPattern(String.raw`[a-z0-9]+(?:-[a-z0-9]+)*`);

export function isSlug(value: string, flags?: string): boolean {
  return slugPattern.test(value, flags);
}

export class SlugRegex extends RegExp {
  constructor(flags?: string) {
    super(slugPattern.exactSource, flags);
  }
}
