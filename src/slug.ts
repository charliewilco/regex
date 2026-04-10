export class SlugRegex extends RegExp {
  constructor(flags?: string) {
    super(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, flags);
  }
}
