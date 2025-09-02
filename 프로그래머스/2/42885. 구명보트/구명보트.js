function solution(people, limit) {
    let ans = 0;
    let min = 0;
    people.sort((a, b) => a - b);

    while(true) {
        for(let i = people.length-1; i >= min; i--) {
            if (people[min] > limit/2) { return ans + people.length - min; }
            else if (people[people.length - 1] < limit/2) { return ans + Math.ceil((people.length-min) / 2) }
            else if (i === min) { return ans + people.length - min; }
            else if (people[min] + people[i] <= limit) {
                ans += people.length - i;
                people.splice(i);
                min++;
                
                // console.log(people);
            }
        }
        if (people.length === min) { return ans }
    }
}