function solution(s, skip, index) {
    const INDEX_OF_A = 97;
    let result = [];
    const DICT = Array(26)
        .fill("")
        .map((e, i) => INDEX_OF_A + i)
        .filter(e => !skip.includes(String.fromCharCode(e)));
    s.split("").forEach(e => {
        result.push(DICT[(DICT.indexOf(e.charCodeAt(0)) + index) % DICT.length]);
    });
    return result.map(e => String.fromCharCode(e)).join("");
}