function solution(name, yearning, photo) {
    let ans = [];
    let dict = {};
    name.forEach((v, i) => {
        dict[v] = yearning[i]
    });
    
    photo.forEach((v, i) => {
        ans[i] = 0;
        v.forEach((vv, ii) => {
            (dict[vv]) && (ans[i] += dict[vv])
        });
    });
    
    return ans
}