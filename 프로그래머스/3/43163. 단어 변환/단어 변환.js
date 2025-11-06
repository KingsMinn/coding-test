function isNextWord(current, next) {
    let diff = 0;
    for(let i = 0; i < current.length; i++) {
        if (current[i] !== next[i]) diff++;
        if (diff > 1) return false;
    }
    return true;
}

function solution(begin, target, words) {
    const queue = [[begin, 0]];
    let head = 0;
    while(head < queue.length) {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const [currentWord, distance] = queue[head];
            if (word) {
                if (isNextWord(currentWord, word)) {
                    if (word === target) return distance+1;
                    queue.push([word, distance + 1]);
                    words[i] = false;
                }
            }
        }
        head++;
    }
    
    return 0
}