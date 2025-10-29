function solution(keymap, targets) {
	let minTypingMap = [];
    let minCounts = new Map;
    let result = [];
    
    keymap.forEach((keys, i) => {
        let tempKeys = keys;
        minTypingMap[i] = new Map;
        
        while(tempKeys.length > 0){
            minTypingMap[i].set(tempKeys[0], keys.indexOf(tempKeys[0]) + 1);
            tempKeys = tempKeys.replaceAll(tempKeys[0], '');
        }
    });
    
    minTypingMap.forEach(map => {
        for(let [key, count] of map) {
            minCounts.set(key, Math.min(minCounts.get(key) || Infinity, count));
        }
    })
    
    targets.forEach((target, i) => {
        for (let e of target.split("")){
			if (!minCounts.has(e)) { result[i] = -1; break; }
            if (result[i]) { result[i] += minCounts.get(e); }
            else { result[i] = minCounts.get(e); }  
        }
    });
    
    return result;
}