function solution(maps) {
    const MOVEMENT = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const paths = [[1, 0, 0]];
    maps[0][0] = 0;
    for(let head = 0; head < paths.length; head++) {
        const [dis, y, x] = paths[head];
        
        for([my, mx] of MOVEMENT) {
            if ((maps.length-1 === y) && (maps[0].length-1 === x)) {
                return dis;
            }
            
            if (maps[y + my] && maps[y + my][x + mx]) {
                paths.push([dis+1, y + my, x + mx]);
                maps[y + my][x + mx] = 0;
            }
        };
    };
    return -1;
}