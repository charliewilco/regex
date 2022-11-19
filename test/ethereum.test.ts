import { EthereumAddressRegex } from "../src/ethereum";

describe("Eth addresses", () => {
	test("Recognizes Ethereum Addresses", () => {
		const re = new EthereumAddressRegex();
		expect(re.test("555-,,ny")).toBeFalsy();
		expect(re.test("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")).toBeTruthy();
		expect(re.test("xxx")).toBeFalsy();
	});
});
