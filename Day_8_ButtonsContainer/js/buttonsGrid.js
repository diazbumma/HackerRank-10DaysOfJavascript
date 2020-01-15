let pattern = [1, 2, 3, 6, 9, 8, 7, 4];
let begin = 0;

let myButton = document.getElementById("btn5");
myButton.onclick = function rotate() {
    begin++;
    if (begin > 7) {
        begin -= 8;
    }
    for (let i = 0; i < 8; i++) {
        let index = begin+i;
        if (index > 7) {
            index -= 8;
        }
        let btn = "btn";
        btn = btn.concat(pattern[index].toString());
        document.getElementById(btn).innerHTML = pattern[i];
    }
};
