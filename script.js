function getPin() {
    const random = Math.random() * 10000;
    const pin = '' + (Math.round(random));
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

// Display Generated Pin :
function generatePin() {
    document.getElementById('pin').value = getPin();
};


// Calculator :
document.getElementById('digits-container').addEventListener('click', function (event) {
    const clickedDigit = event.target.innerText;
    let output = document.getElementById('output');
    if (isNaN(clickedDigit)) {
        if (clickedDigit === 'C') {
            output.value = '';
        }
        else if (clickedDigit === '<') {
            output.value = (output.value).slice(0, -1);
        }
    }
    else {
        output.value = output.value + clickedDigit;
    }
});

// Verify Pin :
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('output').value;
    if (pin == typedPin) {
        displayResult('block','none');
    }
    else {
        displayResult('none','block');
    }
};

function displayResult(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const wrong = document.getElementById('wrong-pin');
    wrong.style.display = incorrectStatus;
}