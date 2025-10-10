function divider(str){
    const obj = new Map();
    const div = str.toLowerCase().split('').map((word, ind, arr) => {
        if (ind < arr.length - 1) {
            const res = word + arr[ind + 1];
            const regex = /^[a-zA-Z]*$/;
            return regex.test(res) ? res : null;
        }
        else{ return null };
    }).filter(word => word !== null);
    
    div.forEach(el => {
        if (obj.has(el)) {
            const prev = obj.get(el);
            obj.set(el, prev+1);
        } else {
            obj.set(el, 1);
        }
    });
    return obj;
}

function solution(str1, str2) {
    let obj1 = divider(str1);
    let obj2 = divider(str2);
    let sum = new Map();
    let inter = new Map();
    let sumSize = 0;
    let interSize = 0;
    const MAGIC_NUM = 65536;
    
    for (key of obj1.keys()){
        key1 = obj1.get(key);
        key2 = obj2.get(key);
        
        if (!key2) {sum.set(key, key1); continue;}
        
        const max = Math.max(key1, key2);
        const min = Math.min(key1, key2);
        
        sum.set(key, max);
        inter.set(key, min);
        
        obj2.delete(key);
    }

    for (key of obj2.keys()) sum.set(key, obj2.get(key));
    
    for (key of sum.keys()) sumSize += sum.get(key);
    for (key of inter.keys()) interSize += inter.get(key);
    
    if (!sumSize && !interSize) {return MAGIC_NUM};
    
    return Math.floor((interSize / sumSize)*MAGIC_NUM);
}