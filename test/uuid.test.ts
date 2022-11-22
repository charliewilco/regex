import { uuid } from "../src/uuid";

describe("Universal Unique ID", () => {
	test("valid uuids", () => {
		expect(uuid.test("123e4567-e89b-12d3-a456-426655440000")).toBeTruthy();
		expect(uuid.test("c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd")).toBeTruthy();
		expect(uuid.test("C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD")).toBeTruthy();
	});
	test("invalid uuids", () => {
		expect(uuid.test("555-,,ny")).toBeFalsy();
		expect(uuid.test("definitely-not-a-uuid")).toBeFalsy();
		expect(uuid.test("xxx")).toBeFalsy();
		expect(uuid.test("c73bcdcc26694bf681d3e4ae73fb11fd")).toBeFalsy();
	});
});

// 123e4567-e89b-12d3-a456-426655440000
// c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd
// C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD
// C73BCDCC-2669-4Bf6-81d3-E4AE73FB11FD
