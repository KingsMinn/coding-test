function solution(k, t) {
    let arr = {};
    let ans = 0;
    let fill = 0;
    t.forEach(v => arr[v] ? arr[v]++ : arr[v]=1);
    arr = Object.values(arr);
    arr.sort((a, b) => b - a);
    
    for(v of arr) {
        ans++;
        fill += v;
        if (fill >= k) { return ans }
    }
}