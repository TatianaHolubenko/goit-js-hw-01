// function getElementWidth(content, padding, border) {
//   return (
//     Number.parseFloat(content) +
//     2 * Number.parseFloat(padding) +
//     2 * Number.parseFloat(border)
//   );
// }
// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));

// function calculateTotal(number) {
//   let count = 0;
//   let sum = 0;
//   while (count < number) {
//     sum += count;
//     count += 1;
//   }
//   return sum;
// }
// console.log(calculateTotal(18));

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(27));
// console.log(calculateTotal());

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(6, 17);
function findNumber(start, end, divisor) {
  for (let i = start; i < end; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
