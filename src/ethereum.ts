import { defineRegexPattern } from "./pattern.ts";

export const ethereumAddressPattern = defineRegexPattern(String.raw`0x[a-fA-F0-9]{40}`);

export function isEthereumAddress(value: string, flags?: string): boolean {
  return ethereumAddressPattern.test(value, flags);
}

export class EthereumAddressRegex extends RegExp {
  constructor(flags?: string) {
    super(ethereumAddressPattern.exactSource, flags);
  }
}
