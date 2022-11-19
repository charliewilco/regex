export class USPhoneNumberRegex extends RegExp {
	constructor(flags?: string) {
		super(/(?:\(?\d{3})?\)?[- ]?[2-9]\d{2}[- ]?\d{4}/, flags);
	}
}

export class IntlPhoneNumberRegex extends RegExp {
	constructor(flags?: string) {
		super(/^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/, flags);
	}
}
