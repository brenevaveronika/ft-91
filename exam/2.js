function findMaxSumBlock(str) {
    
    let currentSum = 0;
    let currentBlock = '';

    let maxSum = 0;
    let maxBlock = '';
    
    for (let char of str) {
        if (char !== '0') {
            currentBlock += char;
            currentSum += parseInt(char);
        } else {
            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxBlock = currentBlock;
            }
            currentSum = 0;
            currentBlock = '';
        }
    }
    
    return [maxBlock, maxSum];
}

const result = findMaxSumBlock("72102450111111090");
console.log(result);