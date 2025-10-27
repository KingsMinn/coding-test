function solution(board, moves) {
    let basket = [];
    let VerBoard = [];
    let ans = 0;
    
    for (let ind = board.length - 1; ind >= 0; ind--) {
        board[ind].forEach((el, i) =>
            el && (VerBoard[i] ? VerBoard[i].push(el) : VerBoard[i] = [el]))
    }
    
    moves.forEach(e => {
        const target = VerBoard[e-1][VerBoard[e-1].length - 1];
        if (target) {
            if (target === basket[basket.length - 1]) {basket.pop(); ans += 2; }
            else { basket.push(target); }
            VerBoard[e-1].pop();
        }
    });
    
    return ans
}