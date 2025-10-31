function solution(schedules, timelogs, startday) {
    const WEEKEND = [(7 + 6 - startday) % 7, (7 + 7 - startday) % 7];
    let result = schedules.length;
    
    schedules = schedules.map(e => {
        if ((e + 10) % 100 >= 60) { return e + 100 - 50 }
        else { return e + 10 }
    });
    
    for(let employee = 0; employee < timelogs.length; employee++) {
        const timelog = timelogs[employee];
        
        for (let day = 0; day < timelog.length; day++) {
            if (day === WEEKEND[0] || day === WEEKEND[1]) continue;
            if (timelog[day] > schedules[employee]) { result--; break; }
        }
    }
    
    return result
}