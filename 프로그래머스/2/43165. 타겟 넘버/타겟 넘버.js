function solution(numbers, target) {
    function dfs(ind = 0, sum = 0) {
        if (ind === numbers.length) {
            if (sum === target) return 1;
            return 0;
        }
        return dfs(ind + 1, sum + numbers[ind]) + dfs(ind + 1, sum - numbers[ind]);
    }
    return dfs();
}