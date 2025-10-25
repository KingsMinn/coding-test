function solution(new_id) {
    const regex1 = /[a-z0-9_.-]/g;
    const regex2 = /\.+/g;
    const regex3 = /^\./;
    const regex4 = /\.$/;
    
    let text = new_id.toLowerCase().match(regex1).join("").replace(regex2, ".").replace(regex3, "").replace(regex4, "");
    if (!text.length) text = 'a';
    text = text.slice(0, 15).replace(regex4, "");
    while(text.length <= 2) text += text[text.length-1];
    return text
}