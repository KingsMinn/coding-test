function solution(dartResult) {
    const BONUS_LIST = {
        "S": 1,
        "D": 2,
        "T": 3,
    }
    let ans = [];
    let scores = dartResult.split(/(=?\d+)/);
    scores.shift();
    
    for(let i = 0; i < scores.length; i += 2) {
        const [bonus, option] = scores[i+1].split("");
        ans.push(scores[i] ** BONUS_LIST[bonus]);
        
        if (option === "*") {
            ans[ans.length-1] *= 2;
            if (ans.length > 1) {ans[ans.length-2] *= 2;}
        } else if (option === "#") {
            ans[ans.length-1] *= -1;
        }
        
    }
    return ans.reduce((arr, cur) => arr + cur, 0);
}