import { defineRegexPattern } from "./pattern.ts";

export const usPhoneNumberPattern = defineRegexPattern(
  String.raw`(?:\+?1[-.\s]?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?[2-9]\d{2}[-.\s]?\d{4}`,
);

export function isUSPhoneNumber(value: string, flags?: string): boolean {
  return usPhoneNumberPattern.test(value, flags);
}

export const intlPhoneNumberPattern = defineRegexPattern(
  String.raw`\+(?=(?:\D*\d){8,15}$)[1-9](?:[\s.-]?\d)+`,
);

export function isIntlPhoneNumber(value: string, flags?: string): boolean {
  return intlPhoneNumberPattern.test(value, flags);
}

export class USPhoneNumberRegex extends RegExp {
  constructor(flags?: string) {
    super(usPhoneNumberPattern.exactSource, flags);
  }
}

export class IntlPhoneNumberRegex extends RegExp {
  constructor(flags?: string) {
    super(intlPhoneNumberPattern.exactSource, flags);
  }
}
