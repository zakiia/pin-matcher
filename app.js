function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else{
        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value  = newCalc; 
    }
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typeNumbers) {
        successMassage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        successMassage.style.display = 'none';
    }
}