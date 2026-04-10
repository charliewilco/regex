export class USPhoneNumberRegex extends RegExp {
  constructor(flags?: string) {
    super(
      /^(?:\+?1[-.\s]?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?[2-9]\d{2}[-.\s]?\d{4}$/,
      flags,
    );
  }
}

export class IntlPhoneNumberRegex extends RegExp {
  constructor(flags?: string) {
    super(/^\+(?=(?:\D*\d){8,15}$)[1-9](?:[\s.-]?\d)+$/, flags);
  }
}
