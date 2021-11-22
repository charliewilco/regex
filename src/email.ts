export class EmailRegex extends RegExp {
  constructor(flags?: string) {
    super(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/, flags);
  }
}
