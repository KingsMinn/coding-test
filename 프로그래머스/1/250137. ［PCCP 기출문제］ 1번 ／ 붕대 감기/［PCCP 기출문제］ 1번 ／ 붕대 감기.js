function solution(bandage, health, attacks) {
    let attackInd = 0;
    let bandageTime = 0;
    let hp = health;
    
    for(let time = 0; time <= attacks[attacks.length - 1][0]; time++) {
        if (attacks[attackInd][0] === time) {
            hp -= attacks[attackInd][1];
            attackInd++;
            bandageTime = 0;
            if (hp <= 0) return -1;
            continue;
        }
        
        hp += bandage[1];
        bandageTime++;
        
        if (bandageTime === bandage[0]) {
            hp += bandage[2];
            bandageTime = 0;
        }
        
        hp = Math.min(hp, health);
    }
    
    return hp
}