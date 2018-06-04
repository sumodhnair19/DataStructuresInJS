function countAllZeroes(n){
    let zeroes = 0;
    while(n >= 1){
      zeroes += n/10;
      n = n/10;
    }
    return Math.floor(zeroes);
}
  
countAllZeroes(50);