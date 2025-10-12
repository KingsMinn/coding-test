function solution(n, words) {
    const history = new Map();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const prev = words[i-1];
        const player = [i%n + 1, Math.floor(i/n + 1)];
        
        if ((i > 0) && (prev[prev.length-1] !== word[0])) return player;
        if (history.has(word)) return player;
        
        history.set(word, true);
    };
    return [0, 0];
}