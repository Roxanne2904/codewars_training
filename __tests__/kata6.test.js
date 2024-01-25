"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kata6 = require("../src/kata6");

describe("Test suite for Kata7", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect((0, kata6.add)(1, 2)).toBe(3);
	});
	it("should return correct permutations", function () {
		expect(kata6.telephoneWord("0002")).toStrictEqual(["000A", "000B", "000C"]);
		expect(kata6.telephoneWord("0182")).toStrictEqual([
			"01TA",
			"01TB",
			"01TC",
			"01UA",
			"01UB",
			"01UC",
			"01VA",
			"01VB",
			"01VC",
		]);
	});
});
