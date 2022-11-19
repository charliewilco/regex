import { USPhoneNumberRegex, IntlPhoneNumberRegex } from "../src/phone-numbers";

describe("Phone numbers", () => {
	it("US Phone Numbers", () => {
		const re = new USPhoneNumberRegex();
		expect(re.test("717-242-6729")).toBeTruthy();
		expect(re.test("555-,,ny")).toBeFalsy();
	});

	it("International Phone Numbers", () => {
		const re = new IntlPhoneNumberRegex();
		expect(re.test("+462345678901")).toBeTruthy();
		expect(re.test("nothing to see")).toBeFalsy();
	});
});
