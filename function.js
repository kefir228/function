// 1. 
function getMaxDigit(number) {
    const numberString = number.toString();
    let maxDigit = 0;
    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]);
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
    return maxDigit;
}
// 2.
const power = (n,m) => {
    if(m === 0){
        return 1
    }
    let result = n
    for(let i = 1; i < Math.abs(m); i++){
        result *= n
    }
    if(m < 0){
        return 1 / result
    }
    return result
}
// 3.
const toUpperCase = (letter) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
}
// 4.
const sumAfterTax = (sum) => {
     return sum - (sum * 19.5 / 100)
    }
// 5.
const getRandomNumber = (N,M) => {
    return Math.floor(Math.random()*(M - N + 1)) + N
}
// 6.
const countLetter = (letter,word) => {
    let count = 0
    for (let i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === letter.toLowerCase()){
        count++
        }
    }
    return count
}
// 7,8.
const convertCurrency = (value) => {
    value = value.toLowerCase()
    if (value.includes('$') && value.toLowerCase()) {
        return Number(value.replace('$', '')) * 25 + `${' uah'}`
    }else if(value.includes('uah')){
        return Number(value.replace('uah','') / 25) + `${' $'}`;
    } else{
        return ('Error');
    }
} 
// 9.
const getRandomPassword = (num = 8) => {
    let pasword = ''
    for(let i = 0; i < num; i ++){
        pasword += Math.floor(Math.random(num)*10)
    }
    return pasword
}
// 10. 
const deleteLetters = (ltr , sent) => {
    while(sent.includes(ltr)){
        sent = sent.replace(ltr,'')
    }
    return sent
}
// 11.
const isPalyndrom = (word) => {
    const newWord = word.replace(/\s/g, '').toLowerCase()
    return newWord === newWord.split('').reverse().join('')
}
// 12.
const deleteDuplicateLetter = (sentence) => {
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        const currentLetter = sentence[i];
        if (sentence.indexOf(currentLetter) === sentence.lastIndexOf(currentLetter)) {
            result += currentLetter;
        }
    }
    return result;
}

console.log(`Функція №1 :${getMaxDigit(9123456)}`);
console.log(`Функція №2 :${power(2,4)}`)
console.log(`Функція №3 :${toUpperCase('OLEG')}`)
console.log(`Функція №4 :${sumAfterTax(500)}`);
console.log(`Функція №5 :${getRandomNumber(1,10)}`)
console.log(`Функція №6 :${countLetter('a','arara')}`);
console.log(`Функція №7,8 :${convertCurrency('100Uah')}`)
console.log(`Функція №9 :${getRandomPassword(5)}`);
console.log(`Функція №10 :${deleteLetters('a', 'bkabka')}`);
console.log(`Функція №11 :${isPalyndrom('мадам')}`);
console.log(`Функція №12 :${deleteDuplicateLetter('zzzzzzzzzzzzzzzzdcwodjcmwodcmqpls,x')}`);
