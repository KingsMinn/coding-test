function solution(ingredient) {
    let answer = 0;
    let stack = [];
    const HAMBURGER = [1, 2, 3, 1];
    
    ingredient.forEach(e => {
        stack.push(e);
        if (stack.length >= HAMBURGER.length) {
            while (stack.slice(stack.length - HAMBURGER.length).join() === HAMBURGER.join()) {
            	answer++;
                stack.splice(stack.length - HAMBURGER.length);
			}
        }
    })
    
    return answer;
}