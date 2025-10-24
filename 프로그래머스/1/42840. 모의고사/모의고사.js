function solution(answers) {
    let ans = [];
    const solvers = {
        '1': {
            pattern: [1, 2, 3, 4, 5],
            correct: 0,
        },
        '2': {
            pattern: [2, 1, 2, 3, 2, 4, 2, 5],
            correct: 0,
        },
        '3': {
            pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            correct: 0,
        }
    };
    
    answers.forEach((ans, ind) => {
        for (let solver in solvers) {
            const s = solvers[solver];
            s.correct += s.pattern[ind%s.pattern.length] === ans;
        }
    });
    for (let solver in solvers) { ans.push([solver, solvers[solver].correct]) }
    return ans.sort((a, b) => b[1] - a[1]).filter(el => el[1] === ans[0][1]).map(el => Number(el[0]));
}