function solution(today, terms, privacies) {
    const MONTHS_PER_YEAR = 12;
    const DAYS_PER_MONTH = 28;
    
    const getTime = date => {
        const [year, month, day] = date.split(".").map(Number);
        return (year - 2000) * MONTHS_PER_YEAR * DAYS_PER_MONTH + month * DAYS_PER_MONTH + day
    };
    
    const NOW_TIME = getTime(today);
    const termMap = new Map;
    
    terms.forEach(term => {
        const [type, duration] = term.split(" ");
        termMap.set(type, NOW_TIME - duration * DAYS_PER_MONTH);
    });
    
    let result = [];
    
    privacies.forEach((privacy, ind) => {
        let [date, type] = privacy.split(" ");
        date = getTime(date);
        if (date <= termMap.get(type)) { result.push(ind + 1) }
    });
    
    return result
}