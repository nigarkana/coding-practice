
function numCount(arr, num) {   
    let count = 0;
    let len = arr.length

    for(let i=0; i<len; i++) {
        if(arr[i] == num) {
            count++
        }
    }

    return count;
}

module.exports = numCount;