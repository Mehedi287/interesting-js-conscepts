/*
thre are 8 cough show undefine
1.declaer a variable and don not set any value
2.function thake return nah korlea 
3,function a sodu return lekhlea 
4.function ar paramete pass nah korlea 
5.from any objact access the undeclar proparty
6,from any arry access the out of index Number
7.accessing the deleted element form an arry
*/
//1
let b;
// console.log(b);
//2
function ret(x, y) {

    const sum = x + y;

}
// console.log(ret(45, 5));
// 3
function add(s, h) {
    const sum = s + h;
    return;
}
// console.log(add(45, 5));
// 4 parameter 
function ab(n, m) {
    const add = m + n;
}
// console.log(ab(45));
// 5 objact 
const ob = { naem: 'goi', id: 08 }
// console.log(ob.fatherName);

// 6 arry
const ar = [979, 46, 313, 431, 24]
// console.log(ar[8]);
// 7 accessing the deleted element form an arry
const arr = [4565, 4212, 6551, 21, 5];
const de = delete arr[0];
// console.log(arr[0]);
// console.log(arr);
// 8 any proparty value = undefined 
const h = undefined;
console.log(h);


