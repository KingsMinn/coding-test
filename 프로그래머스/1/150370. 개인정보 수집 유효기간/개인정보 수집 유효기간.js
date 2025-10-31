function solution(today, terms, privacies) {
    const MONTHS_PER_YEAR = 12;
    const DAYS_PER_YEAR = 28;
    
    const getTime = date => date.split(".").reduce((arr, cur, ind) => {
        if (ind === 0) { return arr + (Number(cur) - 2000) * MONTHS_PER_YEAR * DAYS_PER_YEAR }
        else if (ind === 1) { return arr + Number(cur) * DAYS_PER_YEAR }
        else { return arr + Number(cur) }
    }, 0);
    
    const NOW_TIME = getTime(today);
    const termMap = new Map;
    
    terms.forEach(term => {
        const [type, duration] = term.split(" ");
        termMap.set(type, NOW_TIME - duration * DAYS_PER_YEAR);
    });
    
    let result = [];
    
    privacies.forEach((privacy, ind) => {
        let [date, type] = privacy.split(" ");
        date = getTime(date);
        if (date <= termMap.get(type)) { result.push(ind + 1) }
    });
    
    return result
}