function solution(triangle) {
    for(let i = 0; i < triangle.length-1; i++) {
        const next = [...triangle[i+1]];
        triangle[i].forEach((num, ii) => {
            triangle[i+1][ii] = Math.max(triangle[i+1][ii], next[ii] + num);
            triangle[i+1][ii+1] = Math.max(triangle[i+1][ii+1], next[ii+1] + num);
        });
    }
    return Math.max(...triangle[triangle.length-1]) 
}