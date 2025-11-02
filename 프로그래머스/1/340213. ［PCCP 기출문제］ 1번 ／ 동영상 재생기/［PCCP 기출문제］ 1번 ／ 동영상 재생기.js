function decoder(time) {
    const [min, sec] = time.split(":").map(Number);
    return min * 60 + sec;
}

function encoder(time) {
    const convertedMin = String(Math.floor(time/60)).padStart(2, "0");
    const convertedSec = String(time%60).padStart(2, "0");
    return convertedMin + ":" + convertedSec
}

function solution(video_len, pos, op_start, op_end, commands) {
    [video_len, pos, op_start, op_end] =
        [video_len, pos, op_start, op_end].map(el => decoder(el));
    
    commands.forEach(cmd => {
        if (pos >= op_start && pos <= op_end) { pos = op_end };
        if (cmd === "prev") { pos = Math.max(pos - 10, 0) };
        if (cmd === "next") { pos = Math.min(pos + 10, video_len) };
    });
    if (pos >= op_start && pos <= op_end) { pos = op_end };
    return encoder(pos)
}