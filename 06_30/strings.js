const calculateStringLength = (str) => str.length;
const getCharAtIndex = (str, i) => str[i];
const concatenate = (str1, str2) => str1 + str2;
const repeatStr = (str, r) => str.repeat(r);
const capitalizeStr = (str) => str[0].toUpperCase() + str.slice(1);

console.log(calculateStringLength("Japon"));

console.log(getCharAtIndex("Japon", 4));

console.log(concatenate("Salto", " largo"));
console.log(concatenate("Japon", " da miedo"));

console.log(repeatStr("Casa", 5));

console.log(capitalizeStr("Japon"));