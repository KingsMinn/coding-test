function solution(cards1, cards2, goal) {
    let counter = [0, 0];
    
    for(v of goal){
        if ( cards1[counter[0]] === v ) { counter[0]++ }
        else if ( cards2[counter[1]] === v ) { counter[1]++ }
        else { return 'No' }
    }
    return 'Yes'
}