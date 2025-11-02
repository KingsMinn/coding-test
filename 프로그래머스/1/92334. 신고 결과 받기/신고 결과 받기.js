function solution(id_list, report, k) {
    let reportedList = new Map();
    let getMailList = new Map();
    
    id_list.forEach(id => {
        reportedList.set(id, new Set());
        getMailList.set(id, 0);
    });
    
    report.forEach(r => {
        const [userId, reportedId] = r.split(" ");
        reportedList.get(reportedId).add(userId);
    });
    
    reportedList.forEach((reportIds, reportedId) => {
        if (reportIds.size >= k) {
            reportIds.forEach(reportId => {
                getMailList.set(reportId, getMailList.get(reportId) + 1 || 1);
            });
        }
    })
    
    let result = [];
    getMailList.forEach(num => { result.push(num) });
    return result;
}