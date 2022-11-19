export class HTMLRegex extends RegExp {
	constructor(flags?: string) {
		super(/<\/?(?:p|a|b|img)(?: [A-Za-z0-9]+=["'`].+["'`])*(?: \/)?>/, flags);
	}
}
