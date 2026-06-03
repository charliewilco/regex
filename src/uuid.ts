import { defineRegexPattern } from "./pattern.ts";

export const uuidPattern = defineRegexPattern(
  String.raw`[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[1-8][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}`,
);

export function isUUID(value: string, flags?: string): boolean {
  return uuidPattern.test(value, flags);
}

export class UUIDRegex extends RegExp {
  constructor(flags?: string) {
    super(uuidPattern.exactSource, flags);
  }
}
