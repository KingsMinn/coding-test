function solution(s) {
    let ans = 0;
    let pointer = 0;
    
    while(pointer < s.length) {
        let counter = [0, 0]; // [firstLetter, others]
	    let firstLetter = '';
        
        for (let i = pointer; i < s.length; i++) {
            if (i === pointer) { firstLetter = s[i]; }

            if (s[i] === firstLetter) { counter[0]++ }
            else { counter[1]++ }
			
            if ((counter[0] === counter[1]) || (i === s.length-1)) {
                pointer = i+1;
                ans++;
                break;
            }
    	}
    }
    
    return ans;
}