function swapWithoutTemp(a, b){
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
}
  
  swapWithoutTemp(3, 50);