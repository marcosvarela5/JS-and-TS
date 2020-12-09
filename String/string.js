// Author : Marcos Varela learning with BettaTech's youtube videos
// https://www.youtube.com/channel/UCSf6S_PAhXsqGMTPDiKgdRg
var test1 = '(())';
var test2 = '({()()}[()])';
var test3 = '{[}()]';
function isopen(character) {
    return ['(', '{', '['].includes(character);
}
function closes(characterA, characterB) {
    var pairs = { '(': ')', '{': '}', '[': ']', };
    return pairs[characterA] == characterB;
}
function verify(text) {
    var stack = [];
    for (var _i = 0, _a = text.split(''); _i < _a.length; _i++) {
        var character = _a[_i];
        if (isopen(character)) {
            stack.push(character);
        }
        else {
            var topChar = stack.pop();
            if (!closes(topChar, character)) {
                return false;
            }
        }
    }
    return stack.length == 0;
}
console.log(verify(test1));
console.log(verify(test2));
console.log(verify(test3));
