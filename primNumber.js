var n=127;
 if(n<2){
     console.log('Not prime number');
     
 }

else{
    
//     for(var i =2; i<n-1; i++){
//         // console.log(i, n%i);
//         if(n%i==0){
//             console.log('Not prime number');
//             break;
//         }

//     }
//     console.log('prime number');
    
//  }

    function isPrime(n){
        for(var i =2; i<n-1; i++){
        // console.log(i, n%i);
            if(n%i==0){
             return ('Not prime number');
            
            }

        }
        console.log('prime number');
    
    }
    var result = isPrime(n);
    console.log(result);

}









console.log();