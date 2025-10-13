function solution(n, a, b){
    let count = 0;
    for (let i = 2; i <= n; i*=2){
        count++;
        if (Math.ceil(a/i) === Math.ceil(b/i)) return count;
    }
}