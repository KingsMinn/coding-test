function solution(X, Y) {
    let xMap = new Map;
    let yMap = new Map;
    let answer = [];
    
    X.split("").forEach(e => xMap.set(e, xMap.get(e)+1 || 1));
	Y.split("").forEach(e => yMap.set(e, yMap.get(e)+1 || 1));
    
    let xArr = Array.from(xMap).sort((a, b) => a[0] - b[0]);
    let yArr = Array.from(yMap).sort((a, b) => a[0] - b[0]);
    
    while(true) {
        const lastXArr = xArr[xArr.length - 1];
        const lastYArr = yArr[yArr.length - 1];
        
        if (xArr.length === 0 || yArr.length === 0) { break; }
        const checker = lastXArr[0] - lastYArr[0];
        if (checker === 0) {
            answer.push(lastXArr[0]);
            if ((answer.length === 1) && (lastXArr[0] === '0')) { break; }
            
            if (lastXArr[1] > 1) { lastXArr[1]-- }
            else { xArr.pop(); }
            
            if (lastYArr[1] > 1) { lastYArr[1]-- }
            else { yArr.pop(); }
        } else if (checker < 0) { yArr.pop(); }
        else { xArr.pop(); }
    }
    
    return answer.length ? answer.join("") : "-1";
}