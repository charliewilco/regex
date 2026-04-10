const EMAIL_LOCAL_PART = String.raw`[A-Za-z0-9_%+-]+(?:\.[A-Za-z0-9_%+-]+)*`;
const EMAIL_DOMAIN_LABEL = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?`;
const EMAIL_TOP_LEVEL_DOMAIN = String.raw`[A-Za-z]{2,63}`;
const EMAIL_DOMAIN = String.raw`${EMAIL_DOMAIN_LABEL}(?:\.${EMAIL_DOMAIN_LABEL})*\.${EMAIL_TOP_LEVEL_DOMAIN}`;

export class EmailRegex extends RegExp {
  constructor(flags?: string) {
    super(new RegExp(`^${EMAIL_LOCAL_PART}@${EMAIL_DOMAIN}$`, flags));
  }
}
