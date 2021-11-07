const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function (button) {
    button.addEventListener('click',calculate);
});
function calculate(event) {
 const clickbuttonValue = event.target.value;    
}
if (clickbuttonValue == "=") {
    if (display.value !== '') {
        display.value =eval(dispaly.value);
    }    
} else
if (clickbuttonValue === 'C') {
    display.value = '';
    
} else
       {
           display.value += clickedButtonVlaue;
       }