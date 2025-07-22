let s = "Hello World";
let count = 0;
let word = false;

for (let i = 0; i < s.length; i++) {
    if (s[i] != ' ') {
        if (!word) {
            count++;
            word = true;
        }
    } else {
        word = false;
    }
}
console.log("Number of words:", count);