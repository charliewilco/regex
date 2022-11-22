import { usPhoneNumber, IntlPhoneNumberRegex } from "../src/phone-numbers";

describe("Phone numbers", () => {
	test("US Phone Numbers", () => {
		expect(usPhoneNumber.test("717-242-6729")).toBeTruthy();
		expect(usPhoneNumber.test("555-,,ny")).toBeFalsy();
	});

	test("International Phone Numbers", () => {
		const re = new IntlPhoneNumberRegex();
		expect(re.test("+462345678901")).toBeTruthy();
		expect(re.test("nothing to see")).toBeFalsy();
	});
});
