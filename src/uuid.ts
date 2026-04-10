export class UUIDRegex extends RegExp {
  constructor(flags?: string) {
    super(
      /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[1-8][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
      flags,
    );
  }
}
