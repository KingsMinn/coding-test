function solution(wallpaper) {
    let x = [Infinity, 0];
    let y = [Infinity, 0];
    
    for(let i = 0; i < wallpaper.length; i++) {
        const nowX = [wallpaper[i].indexOf("#"), wallpaper[i].lastIndexOf("#")];
        if ( nowX[0] < 0 ) { continue }
        x = [Math.min(x[0], nowX[0]), Math.max(x[1], nowX[1] + 1)];
        y = [Math.min(y[0], i), Math.max(y[1], i + 1)];
    }
    
    return [y[0], x[0], y[1], x[1]]
}