const x = 5;
let result = 0;

console.log("wartość zmiennej result przed operacją (pętla for): " + result);

for (let i = 1; i <= x; i++) {
    result += i;
}

console.log("wartość zmiennej result po operacji (pętla for): " + result);


result = 0;
let breakPoint = 1;

console.log("wartość zmiennej result przed operacją (pętla while): " + result);

while (breakPoint <= x) {
    result += breakPoint;
    breakPoint++;
}
console.log("wartość zmiennej result po operacji (pętla while): " + result);
