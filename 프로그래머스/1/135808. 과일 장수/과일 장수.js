function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let ans = 0;
    for (let i = m-1; i < score.length; i += m) { ans += score[i] * m }
    return ans;
}