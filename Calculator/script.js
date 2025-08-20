let display = document.getElementById('display');
let themeBtn = document.getElementById('themeToggle');
let clickSound = document.getElementById('clickSound');
let body = document.body;

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function addValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function showResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(e) {
    let key = e.key;
    if(!isNaN(key) || ['+','-','*','/','.'].includes(key)){
        playClick();
        addValue(key);
    }
    else if(key === 'Enter'){
        playClick();
        showResult();
    }
    else if(key === 'Backspace'){
        playClick();
        deleteChar();
    }
    else if(key.toLowerCase() === 'c'){
        playClick();
        clearDisplay();
    }
});

themeBtn.addEventListener('click', () => {
    playClick();
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    themeBtn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
});
