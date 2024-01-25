//* 1).
//* Businesses use keypad letters in creative ways to spell out a phone number and make it more memorable.
//* Example: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
export const telephoneWord = (digitString) => {
    const myMap = new Map();
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
        .reduce((acc, val) => {
        const value = myMap.get(val);
        console.log("value:", value);
        if (value) {
            const lettersAsArray = value.split("");
            return [].concat(...lettersAsArray.map((letter) => acc.map((v) => (v += letter))));
        }
        return acc;
    }, [""])
        .sort((a, b) => a.localeCompare(b));
};
console.log(telephoneWord("0182"));
