//use euclid's theorem
//2 nos a and b their gcd would be same as
//gcd(a%b, b) //a > b
//or gcd(a, b%a) // b > a
//whenever a modulo returns 0, the other smaller number would be the GCD

function findGCD(a, b){
    if(a > b){
      if(a%b === 0){
        return b;
      }else{
        return findGCD(a%b, b);
      }
    }else{
      if(b%a === 0){
        return a;
      }else{
        return findGCD(a, b%a);
      }
    }
}
  
findGCD(14, 140);

/**
 * alternate solution
 * 
 */

//find divisors of both and put them in respective arrays
//sort them in descending order
//start comparing, first match should be gcd