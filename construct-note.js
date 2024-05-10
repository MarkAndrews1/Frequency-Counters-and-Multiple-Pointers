// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const letterFreq = {} 
    const msgFreq = {}  

    for(let letter of letters){
        letterFreq[letter] = ++letterFreq[letter] || 1
    }

    for(let char of msg){
        msgFreq[char] = ++msgFreq[char] || 1
    }

    for(let char in msgFreq){
        if(!letterFreq[char]) return false

        if(msgFreq[char] > letterFreq[char]) return false
    }

    return true
}

module.exports = constructNote

