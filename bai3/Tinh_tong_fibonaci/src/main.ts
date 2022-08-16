let n: any = 3;
let sum:number = 0;
function fibonacci(number: number): number {
    if (number == 1 || number == 2){
                return 1;
    }


    return fibonacci(number - 1) + fibonacci(number - 2);
}

for (let i = 1; i <= n ; i++) {
    sum += fibonacci(i);
}

console.log("tong : " + sum);