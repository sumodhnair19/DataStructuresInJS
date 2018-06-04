/**
 * iterative solution
 * 
 */


 /**
  * recursive solution
  * 
  */

  function fibonacci(num){
    console.log(num);
    if(num <=2){
      return 1;
    }else{
      return fibonacci(num-2) + fibonacci(num-1);
    }
  }