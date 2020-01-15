let myButton = document.getElementById('btn');
let number = 1;
myButton.onclick = function() {
    myButton.innerHTML = number++;
};
