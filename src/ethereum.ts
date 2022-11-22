export class EthereumAddressRegex extends RegExp {
	constructor(flags?: string) {
		super(/0x[a-fA-F0-9]{40}/, flags);
	}
}


export const ethereumAddress = new RegExp(/0x[a-fA-F0-9]{40}/)