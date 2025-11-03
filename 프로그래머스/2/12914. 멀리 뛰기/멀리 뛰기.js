function solution(n) {
    let dp = Array(n).fill(0);
    [dp[1], dp[2]] = [1, 2];
    const DIVIDER = 1234567;
    if (n < dp.length) return dp[n];
    
    for (let i = 3; i <= n; i++)
        dp[i] = (dp[i-2] + dp[i-1]) % DIVIDER;
    
    return dp[dp.length - 1]
}