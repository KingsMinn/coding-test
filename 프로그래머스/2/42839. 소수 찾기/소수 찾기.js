function isPrimeNumber(num) {
    num = Number(num);
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const set = new Set();
    const visited = Array(numbers.length).fill(false);
    
    function dfs(currentNum = "") {
        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                const newNum = currentNum + numbers[i];
                if (isPrimeNumber(newNum)) set.add(Number(newNum));
                dfs(newNum);
                visited[i] = false;
            }
        }
    }
    dfs();
    
    return set.size
}