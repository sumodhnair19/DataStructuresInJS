function reverseMultiWordString(str){
    let temp = [];    

    //split the string on space using an array
    for(let i of str.split(' ').reverse()){
        //preprocess each word i.e. reverse it
        temp.push(i.split('').reverse().join(''));
    }

    //convert array back to string and return
    return temp.join(' ');
}