function solution(n, w, num) {
    let answer = 1;
    while((num = 2*w*Math.ceil(num/w)-num+1) <= n) answer++
    return answer
}