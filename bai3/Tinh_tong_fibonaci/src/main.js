var n = 3;
var sum = 0;
function fibonacci(number) {
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
for (var i = 1; i <= n; i++) {
    sum += fibonacci(i);
}
console.log("tong : " + sum);
