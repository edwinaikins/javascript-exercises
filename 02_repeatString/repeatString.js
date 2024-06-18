const repeatString = function(userWord, userNumber) {
if(userNumber<0){
    return "ERROR"
}
let newUserWord = "";
for(let num=0; num<userNumber; num++){
    newUserWord = newUserWord + userWord;
}
return newUserWord;

};

// Do not edit below this line
module.exports = repeatString;
