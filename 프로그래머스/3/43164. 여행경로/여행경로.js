function solution(tickets) {
    const visited = Array(tickets.length).fill(false);
    let ans = [];
    tickets.sort();
    
    function dfs(journey = ["ICN"]) {
        for (let i = 0; i < tickets.length; i++) {
            const [departure, destination] = tickets[i];
            if (!visited[i] && (departure === journey[journey.length - 1])) {
                visited[i] = true;
                journey.push(destination);
                
                if (journey.length === tickets.length+1) {
                    ans = [...journey];
                    return true;
                }
                
                if (dfs(journey) === true) return true;
                
                visited[i] = false;
                journey.pop();
            }
        }
        return false;
    }
    dfs();
    return ans;
}