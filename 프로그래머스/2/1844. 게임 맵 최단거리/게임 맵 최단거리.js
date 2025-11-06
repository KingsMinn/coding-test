function solution(maps) {
    const H = maps.length;
    const W = maps[0].length;
    
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [[0, 0, 1]];
    let head = 0;
    maps[0][0] = 0;
    
    while(head < queue.length) {
        const [y, x, distance] = queue[head];
        if (y === H - 1 && x === W - 1) { return distance };
        
        DIRECTIONS.forEach(([dy, dx]) =>{
            const targetY = dy + y;
            const targetX = dx + x;
            if (targetY >= 0 && targetY < H && targetX >= 0 && targetX < W && maps[targetY][targetX]) {
                queue.push([targetY, targetX, distance + 1]);
                maps[targetY][targetX] = 0;
            }
        });
        head++;
    }
    
    return -1
}