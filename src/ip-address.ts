import { IP_ADDRESS_V4 } from "./tokens";

export class IPv4AddressRegex extends RegExp {
  constructor(flags?: string) {
    super(new RegExp(`^${IP_ADDRESS_V4}$`, flags));
  }
}
