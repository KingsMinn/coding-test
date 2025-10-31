function solution(survey, choices) {
    const DICT = ["R", "T", "C", "F", "J", "M", "A", "N"];
    let types = { "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0 };
    let result = ["R", "C", "J", "A"];
    
    for (let i = 0; i < survey.length; i++) {
        if ( choices[i] === 4 ) { continue }
        else if ( choices[i] < 4 ) { types[survey[i][0]] += 4 - choices[i] }
        else { types[survey[i][1]] += choices[i] - 4 }
    }
    
    return result.map((e, i) => types[e] < types[DICT[i*2+1]] ? DICT[i*2+1] : e).join("")
}