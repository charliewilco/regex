export interface RegexPattern {
  readonly source: string;
  readonly exactSource: string;
  create(flags?: string): RegExp;
  test(value: string, flags?: string): boolean;
}

export function defineRegexPattern(source: string): RegexPattern {
  const exactSource = `^(?:${source})$`;

  return Object.freeze({
    source,
    exactSource,
    create(flags?: string) {
      return new RegExp(exactSource, flags);
    },
    test(value: string, flags?: string) {
      return new RegExp(exactSource, flags).test(value);
    },
  });
}
