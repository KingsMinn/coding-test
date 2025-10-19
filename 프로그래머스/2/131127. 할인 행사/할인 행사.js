function solution(want, number, discount) {
    const list = new Map();
    let ans = 0;
    want.forEach((el, i) => list.set(el, number[i]));
    
    for(let i = 0; i <= discount.length - 10; i++) {
        const test = new Map();
        let isFail = false;
        
        for(let ii = i; ii < i + 10; ii++) {
            if (!list.has(discount[ii])) {isFail = true; break;}
            const count = test.has(discount[ii]) ? test.get(discount[ii]) + 1 : 1;
            test.set(discount[ii], count);
		}
        for(const [key, value] of test) {
            if (value !== list.get(key)) {isFail = true; break;}
        }
        if (!isFail) ans++
    }
    
    return ans;
}