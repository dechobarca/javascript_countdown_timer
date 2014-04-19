"strict";
// document.body.style.backgroundColor = "black";
var originalMinutes;
var counterArea;
var ticker;
var myButton;
var textField;
var originalSeconds;

function createContent() {
    textField = document.createElement('input');
    textField.setAttribute("type", "text");
    textField.setAttribute("value", "Enter minutes");
    document.body.appendChild(textField);
    
    textField.onfocus = function() { 
        if (textField.value == "Enter minutes") {
            textField.value = "";
        } else {
            textField.value = textField.value;
        }
    };
    
    textField.onblur = function() {
        if (textField.value == "Enter minutes" || !textField.value) {
            textField.value = "Enter minutes";    
        }
        else if (isNaN(textField.value)) {
            alert('You must enter a number');
            textField.value = "Enter minutes";  
        } 
    };
    
    myButton = document.createElement('input');
    myButton.setAttribute("type", "button");
    myButton.setAttribute("value", "Start the countdown");
    document.body.appendChild(myButton);
    
    myButton.onclick = function () {
        originalSeconds = textField.value * 60;
        styleSeconds = textField.value * 60;
        myButton.disabled = true;
        clearInterval(ticker);
        ticker = setInterval(tick,1);        
    };
    
    counterArea = document.createElement('p');
    counterArea.setAttribute("id","counterArea");
    document.body.appendChild(counterArea);
    counterArea.innerHTML = "00:00";
};

function styleChanger() {
    if (originalSeconds == 0) {
        counterArea.style.color = "black";
    }
    else if (originalSeconds < (styleSeconds / 4) && originalSeconds > 0) {
        counterArea.style.color = "red";
    }
    else if (originalSeconds < (styleSeconds / 2) && originalSeconds > 0) {
        counterArea.style.color = "orange";
    }
}

function tick() {
    var displayMinutes = Math.floor(originalSeconds / 60);
    var displaySeconds = originalSeconds - (displayMinutes * 60);
    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds;
    }
    counterArea.innerHTML = displayMinutes + ":" + displaySeconds;
    if (originalSeconds == 0) {
        clearInterval(ticker);
        myButton.disabled = false;
    }
    originalSeconds--;
    styleChanger();
}

window.onload = createContent();
