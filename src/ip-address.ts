import { defineRegexPattern } from "./pattern.ts";
import { IP_ADDRESS_V4 } from "./tokens.ts";

export const ipv4AddressPattern = defineRegexPattern(IP_ADDRESS_V4);

export function isIPv4Address(value: string, flags?: string): boolean {
  return ipv4AddressPattern.test(value, flags);
}

export class IPv4AddressRegex extends RegExp {
  constructor(flags?: string) {
    super(ipv4AddressPattern.exactSource, flags);
  }
}
