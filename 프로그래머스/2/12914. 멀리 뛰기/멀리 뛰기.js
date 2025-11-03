function solution(n) {
    let dp = [0, 1, 2];
    const DIVIDER = 1234567;
    if (n < dp.length) return dp[n];
    
    for (let num = dp.length; num <= n; num++)
        dp[dp.length] = (dp[dp.length - 2] + dp[dp.length - 1]) % DIVIDER;
    
    return dp[dp.length - 1] % DIVIDER
}