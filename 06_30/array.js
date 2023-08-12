const nums = [1, 25, 42, 110, 500]
console.log(nums);
console.log(nums.length);

const num2 = nums[1]
console.log(num2);

nums[3] = 120
console.log(nums);

const frutas = []
frutas.push('frutilla', 'manzana', 'anana')
console.log(frutas.length);

frutas.pop()
console.log(frutas);

const mixArr = ['hola', 23, ['casa', 'alpha', 'terreno']]
console.log(mixArr[2]);

const letras = "abcdefghi".split("");
console.log(letras);
console.log(letras.join('->'));

console.log(nums.includes(20));
console.log(nums.indexOf(42));