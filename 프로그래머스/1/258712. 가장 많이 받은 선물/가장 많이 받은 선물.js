function solution(friends, gifts) {
    const giftMap = new Map();
    const giftedMap = new Map();
    friends.forEach(friend => {
        giftMap.set(friend, new Map()); giftedMap.set(friend, 0); });
    friends.forEach(friend =>
        giftMap.forEach((value, key) => key !== friend && value.set(friend, 0)));
    giftMap.forEach(value => value.set('giftPoint', 0));
    
    gifts.forEach(gift => {
        const [from, to] = gift.split(" ");
        const fromMap = giftMap.get(from);
        const toMap = giftMap.get(to);
        fromMap.set(to, fromMap.get(to) + 1);
        fromMap.set('giftPoint', fromMap.get('giftPoint') + 1);
        toMap.set('giftPoint', toMap.get('giftPoint') - 1);
    });
    
    giftMap.forEach((names, from) => {
        names.forEach((count, name) => {
            if (name !== 'giftPoint') {
                let diff = count - giftMap.get(name).get(from);
                if (diff === 0) {
                    diff = names.get('giftPoint') - giftMap.get(name).get('giftPoint');
                }
                
                if (diff > 0) { giftedMap.set(from, giftedMap.get(from) + 1) }
                else if (diff < 0) { giftedMap.set(name, giftedMap.get(name) + 1) }
                giftMap.get(name).delete(from);
            }
        })
    })
    
    const result = [];
    giftedMap.forEach(count => result.push(count));
    
    return Math.max(...result);
}