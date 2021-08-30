const a = [];
if (a) {
    console.log('y');
}
else {
    console.log('n');
}
let p = 'JavaScript';
let q = p; p = 'React';
// console.log(q);
const isTrue = 'false';

if (!isTrue) {

    console.log('hello');

}

else {
    console.log('world');

}
function sum(p, q) {

    console.log(p + q);

}
if ('2' === 2) {

    console.log("Inside if");

}

else {

    console.log("Inside else ");

}

// const result = sum(2, 3);
function work(x, y = 4) {

    return x + y;

}

console.log(work(32));
function sum(p, q) {

    console.log(p + q);

}

const result = sum(2, 3);