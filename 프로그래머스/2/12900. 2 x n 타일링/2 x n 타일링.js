function solution(n) {
    const DIVIDER = 1_000_000_007;
    let dp = Array(n + 1).fill(0);
    [dp[1], dp[2]] = [1, 2];
    for(let i = 3; i <= n; i++) { dp[i] = (dp[i-1] + dp[i-2]) % DIVIDER }
    
    return dp[n]
}