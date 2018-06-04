function capitalizeFirstLetter(str){

    let temp = [];    

    //split the string on space using an array
    for(let i of str.split(' ')){
        //preprocess each word i.e. capitalize it
        temp.push(i[0].toUpperCase() + i.slice(1));
    }

    //convert array back to string and return
    return temp.join(' ');
}
