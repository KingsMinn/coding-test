function getDis(a, b) {
    const PAD = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
    const posA = [PAD.indexOf(a) % 3, Math.floor(PAD.indexOf(a)/3)];
    const posB = [PAD.indexOf(b) % 3, Math.floor(PAD.indexOf(b)/3)];

    return Math.abs(posA[1] - posB[1]) + Math.abs(posA[0] - posB[0]);
}

function solution(numbers, hand) {
    let l = '*';
    let r = '#';
    const MUST_LEFT = [1, 4, 7];
    const MUST_RIGHT = [3, 6, 9];
    let result = [];
    
    function press(e, lr) {
        if (lr === "L") { l = e; result.push('L'); }
        else { r = e; result.push('R'); }
    }
    
    numbers.forEach(e => {
        if (MUST_LEFT.includes(e)) press(e, 'L')
        else if (MUST_RIGHT.includes(e)) press(e, 'R')
        else {
            if (getDis(e, l) < getDis(e, r)) press(e, 'L')
            else if (getDis(e, l) > getDis(e, r)) press(e, 'R')
            else press(e, hand === 'left' ? 'L' : 'R');
        };
    });
    
    return result.join("");
}