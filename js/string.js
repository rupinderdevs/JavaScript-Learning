'use strict';

let string = "I Will not gonna live forever, but i wanna live while i am alive!";

countrepeatedwords = (words) => {

    let words = string.split(" ");
    let wordsmap = {};
    for (let i = 0; i < string; i++) {
        let currentwordrepeat = wordsmap[words[i]];
        let count = currentwordrepeat ? currentwordrepeat : 0;
    
    wordsmap [words[i]] = count + 1;
}
    return wordsmap;
}

console.log(countrepeatedwords(words));