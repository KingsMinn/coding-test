function solution(park, routes) {
    let y, x;
    for(let col = 0; col < park.length; col++) {
        let indexOfS = park[col].indexOf('S');
        if (indexOfS === -1) continue;
        x = indexOfS;
        y = col;
        break;
    }

    for(let route of routes) {
        let [dir, dis] = route.split(" ");
        dis = Number(dis);
        
        for (let i = 1; i <= dis; i++){
            if (dir === "E") {
                if (park[y][x + i] === "X" || park[y][x + i] === undefined) break;
                if (i === dis) x += i;
            }

            if (dir === "W") {
                if (park[y][x - i] === "X" || park[y][x - i] === undefined) break;
                if (i === dis) x -= i;
            }

            if (dir === "S") {
                if (park[y + i] && park[y + i][x] === "X" || park[y + i] === undefined) break;
                if (i === dis) y += i;
            }

            if (dir === "N") {
                if (park[y - i] && park[y - i][x] === "X" || park[y - i] === undefined) break;
                if (i === dis) y -= i;
            }
        }
    }
    return [y, x]
}