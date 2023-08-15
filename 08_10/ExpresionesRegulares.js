//Ejercicio 1
const filterNamesByFirstVowel = (names) => {
  const regex = /^[aeiou]\w*$/i;
  return names.filter((name) => name.match(regex));
};
const filterNamesByLastVowel = (names) => {
  const regex = /[aeiou]$/i;
  return names.filter((name) => name.match(regex));
};
const names = [
  "Lucas",
  "Ezequiel",
  "Abigail",
  "Rodrigo",
  "Santiago",
  "Kevin",
  "Camilo",
  "Rafael",
];
console.log('Ejercicio 1');
console.log(filterNamesByFirstVowel(names));
console.log(filterNamesByLastVowel(names));


//Ejercicio 2
const checkWord = (txt, word) => {
  const regex = new RegExp(word, "i");
  return (
    '"' +
    word +
    '"' +
    (regex.test(txt) ? " esta en el texto" : " no esta en el texto")
  );
};
text = "en la casa del arbol habia un mapache";
console.log("\nEjercicio 2");
console.log(checkWord(text, 'casa'));

//Ejercicio 3
const checkForA = (txt) =>
  txt
    .split(" ")
    .filter((word) => word.match(/[a]\b/))
    .join("-");
console.log("\nEjercicio 3");
console.log(checkForA(text));


//Ejercicio 4
function findNumbers(nums) {
  return nums.filter((num) => num.toString().match(/[4-7]/g));
}
const arrNumbers = [123, 456, 980, 654, 111];
console.log("\nEjercicio 4");
console.log(findNumbers(arrNumbers));
