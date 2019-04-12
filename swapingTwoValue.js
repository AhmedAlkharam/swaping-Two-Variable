//Swapping two values without using third variable

let x = 1;
let y = 2;

console.log('Before swapping x = ' + x + ' and y = ' + y);

x = x + y;
y = x - y;
x = x - y;

console.log('\n\nafter swapping x = ' + x + ' and y = ' + y);