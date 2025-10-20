function getPower(num) {
    let n = num;
    let result = {};
    let divisor = 2;
    let ans = 1;
    while(n > 1) {
        if (divisor > Math.sqrt(num)) {result[n] = 1; break;}
        if (n % divisor === 0) {
            result[divisor] = (result[divisor] || 0) + 1;
            n /= divisor;
            divisor = 2;
        } else { divisor++ }
    }
    for (const el in result) { ans *= result[el] + 1 }
    return ans;
}

function solution(number, limit, power) {
    let ans = 0;
    for (let i = 1; i <= number; i++) {
        let p = getPower(i);
        if (p > limit) {p = power};
        ans += p;
    }
    return ans;
}