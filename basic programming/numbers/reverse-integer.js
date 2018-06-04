function reverseInteger(num){
    return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''));
}

reverseInteger(-19);