function solution(n, left, right) {
	const arr = [];
    let l = left;
    for(let i = Math.floor(left/n); i < n; i++) {
        for(let ii = (i === Math.floor(left/n) ? left%n : 0); ii < n; ii++) {
            if (arr.length == right - left + 1) {break;}
            if (ii < i) {arr.push(i + 1)}
            else {arr.push(ii + 1)}
        }
        if (arr.length == right - left + 1) {break;}
    }
    return arr
}