// src/myModule.ts

export const add = (a: number, b: number): number => a + b;

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

	console.log(myMap);

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
