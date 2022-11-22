import { email } from "../src/email";

describe("Email addresses", () => {
	test("valid email addresses", () => {
		// expect(email.test("charliewilco@charliewil.com")).toBeTruthy();
		expect(email.test("charliewilco42@gmail.com")).toBeTruthy();
	});
});
