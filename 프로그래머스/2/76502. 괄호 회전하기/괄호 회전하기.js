function bracketChecker(s) {
    let stack = [];
    const FAIR = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    s.forEach(el => {
        if ((stack.length > 0) && (stack[stack.length - 1] === FAIR[el]))
            {stack.pop()}
        else {stack.push(el)}
    });
    
    return !stack.length
}

function solution(s) {
    let ans = 0;
    const arr = s.repeat(2).split("");
    
    for (let i = 0; i < s.length; i++) {
        ans += bracketChecker(arr.slice(i, i+s.length));
    };
    
    return ans;
}