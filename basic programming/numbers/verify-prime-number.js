function isPrime(num){
    let limit = Math.floor(Math.sqrt(num)), divisor = 3;
    
    //tackle easy cases first
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    while(divisor <= limit){
      if(num % divisor === 0){
        return false;
      }else{
        divisor += 2;
      }
    }
    return true;
}