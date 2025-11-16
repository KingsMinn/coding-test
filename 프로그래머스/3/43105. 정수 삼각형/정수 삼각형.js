function solution(triangle) {
    triangle.map((arr, i) => i > 0 && arr.map((_, ii) => triangle[i][ii] += Math.max(triangle[i-1][ii] || -Infinity, triangle[i-1][ii-1] || -Infinity)))
    return Math.max(...triangle[triangle.length-1]) 
}