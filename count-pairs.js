// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const numCount = {};

    for (let num of arr) {
        numCount[num] = (numCount[num] || 0) + 1;
    }

    let count = 0;

    for (let num of arr) {
        const complement = target - num;

        if (numCount[complement] && num !== complement) {
            count++; 
            numCount[complement]--;
            numCount[num]--;
        }
    }

    return count;
}

module.exports = countPairs