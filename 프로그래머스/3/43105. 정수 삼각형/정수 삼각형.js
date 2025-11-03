function solution(triangle) {
    let summedTriangle = Array(triangle.length).fill()
        .map((_, i) => Array(triangle[i].length).fill(0));
    summedTriangle[0][0] = triangle[0][0];
    
    for(let col = 1; col < triangle.length; col++) {
        for(let row = 0; row < triangle[col].length; row++) {
            const num = triangle[col][row];
            const prevNumL = summedTriangle[col-1][row-1] || 0;
            const prevNumR = summedTriangle[col-1][row] || 0;
            summedTriangle[col][row] = Math.max(prevNumL, prevNumR) + num;
        } 
    }
    
    return Math.max(...summedTriangle[summedTriangle.length-1])
}