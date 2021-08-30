/*truethy value
1,true
2,any number nagative or posative
3.any string
4,white speach
5,empty arry.
6,empty objact
----------------------------------
falsy value
1.empty string
2.0
3.false
4.undefine
5.null
6.Nan

*/
let a = 789;
let b = 'hasa';
let c = true;
let d = [];
let e = {};
if (e) {
    console.log('truethy value');
}
else {
    console.log('falsey value ');
}
//falsey value
let q = 0;
let w = '';
let s = null;
let l = undefined;
let j = NaN;
if (j) {
    console.log('truethy value ');
}
else {
    console.log('falsey value');
}