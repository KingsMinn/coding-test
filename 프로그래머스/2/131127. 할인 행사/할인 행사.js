function solution(want, number, discount) {
    const list = new Map();
    const wish = new Map();
    want.forEach((el, i) => wish.set(el, number[i]));
    let count = 0;
    
    discount.forEach((el, i) => {
        list.set(el, (list.get(el) + 1) || 1);
        if (i >= 9) {
            let isFail = false;
            const prev = discount[i-10];
            if (list.has(prev)) {
                if (list.get(prev) > 1) {list.set(prev, list.get(prev) - 1)}
                else {list.delete(prev)}
            }
            
            for(const [key, value] of list) {
				if (wish.get(key) !== value) {isFail = true};
            }
            isFail || count++;
        }
    });
    
    return count;
}