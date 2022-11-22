import { ethereumAddress } from "../src/ethereum";

describe("Eth addresses", () => {
	test("Recognizes Ethereum Addresses", () => {
		expect(ethereumAddress.test("555-,,ny")).toBeFalsy();
		expect(ethereumAddress.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")).toBeTruthy();
		expect(ethereumAddress.test("xxx")).toBeFalsy();
	});
});
