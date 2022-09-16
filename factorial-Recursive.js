function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
const result= factorial(9);
console.log(result);
console.log('nije nije call kore tobe recursive');