function solution(babbling) {
    const regex = /(aya|ye|woo|ma)/g;
    let ans = 0;
    babbling.forEach(e => {
        let arr;
        let prev = '';
        let pointer = 0;
        while((arr = regex.exec(e)) !== null) {
            if ((pointer !== arr.index) || (prev === arr[1])) {regex.lastIndex = 0; break};
            prev = arr[1];
            pointer = regex.lastIndex;
            if (pointer === e.length) ans++;
        }  
    });
    
    return ans;
}