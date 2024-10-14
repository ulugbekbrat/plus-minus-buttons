let count = 0;

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("counter").innerText = count;
}