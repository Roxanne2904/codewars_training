//* 1).
//* Businesses use keypad letters in creative ways to spell out a phone number and make it more memorable.
//* Example: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

//* Create a mapping for your dialer as given in the above link. Constraints:

//* letters are all uppercase
//* digits 0, 1 are mapped to 0, 1 respectively
//* Write a function that takes four digits of a
//* phone number, and returns a list of all of the words that can be written with that number.
//* (You should return all permutations, not only English words.)

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type WordsDigit =
	| "0"
	| "1"
	| "ABC"
	| "DEF"
	| "GHI"
	| "JKL"
	| "MNO"
	| "PQRS"
	| "TUV"
	| "WXYZ";
export const telephoneWord = (digitString: string): string[] => {
	const myMap = new Map<Digit, WordsDigit>();

	myMap.set("0", "0");
	myMap.set("1", "1");
	myMap.set("2", "ABC");
	myMap.set("3", "DEF");
	myMap.set("4", "GHI");
	myMap.set("5", "JKL");
	myMap.set("6", "MNO");
	myMap.set("7", "PQRS");
	myMap.set("8", "TUV");
	myMap.set("9", "WXYZ");

	const digitStringAsArray = digitString.split("");

	return digitStringAsArray
		.reduce(
			(acc: string[], val): any => {
				const value = myMap.get(val as Digit);
				console.log("value:", value);

				if (value) {
					const lettersAsArray = value.split("");

					return ([] as string[]).concat(
						...lettersAsArray.map((letter) => acc.map((v) => (v += letter)))
					);
				}
				return acc;
			},
			[""]
		)
		.sort((a, b) => a.localeCompare(b));
};
console.log(telephoneWord("0182"));
