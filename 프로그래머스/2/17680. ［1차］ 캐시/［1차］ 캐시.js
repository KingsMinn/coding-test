function solution(cacheSize, cities) {
    let totalTime = 0;
    const [HIT, MISS] = [1, 5];
    
    if (!cacheSize) return cities.length * MISS;
    
    const cache = new Map();
    
    cities.forEach(city => {
        const cityLower = city.toLowerCase();
        
        if (cache.has(cityLower)) { //hit
            totalTime += HIT;
            cache.delete(cityLower);
        } else {
            totalTime += MISS;
            
            if (cache.size >= cacheSize)
                cache.delete(cache.keys().next().value);
        }
        
        cache.set(cityLower, true);
    });
    
    return totalTime;
}


// function solution(cacheSize, cities) {
//     let totalTime = 0;
//     const [HIT, MISS] = [1, 5];
    
//     if (!cacheSize) return cities.length * MISS;
    
//     const cache = new Map();
    
//     cities.forEach(city => {
//         const cityLower = city.toLowerCase();
        
//         if (cache.has(cityLower)) { //hit
//             totalTime += HIT;
//             cache.delete(cityLower);
//         } else {
//             totalTime += MISS;
            
//             if (cache.size >= cacheSize)
//                 cache.delete(cache.keys().next().value);
//         }
        
//         cache.set(cityLower, true);
//     });
    
//     return totalTime;
// }