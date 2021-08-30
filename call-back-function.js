function goodMorning(a, b) {
    console.log(a, b);
    call()
}
// console.log(goodMorning('hi', 'good morning'));
function call() {
    console.log('hi mama i am new');
}
const t = goodMorning(call, 'how are you');
console.log(t);
