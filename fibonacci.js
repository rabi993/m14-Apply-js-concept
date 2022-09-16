// iterative way
const fibo = [0,1];
// fibo[i] =fibo[i-1] + fibo[i-2];
for(var i =2; i<=10; i++){
    fibo[i] =fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);

// use function
function fibonacci(n){
    const fibon = [0,1];
for(var i =2; i<=n; i++){
    fibon[i] =fibon[i-1] + fibon[i-2];
}
return fibon;
}
var result = fibonacci(12);
console.log(result);

