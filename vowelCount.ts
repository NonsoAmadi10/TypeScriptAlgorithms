const countVowels = (word:string) =>{
    word.replace(/\s/gi, '');
    let re = /[aeiou]+/gi;
    let numberOfVowels = word.match(re);
    return numberOfVowels.length;
    

}

console.log(countVowels('This is Amadi Justice  '))