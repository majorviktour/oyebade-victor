$('.button').on('click',function(evt){
    var buttonPressed = $(this).html();
    console.log(buttonPressed);
    
    if (buttonPressed >= '0' && buttonPressed <= '9') {
        if (currentEntry === '0') {
            currentEntry = buttonPressed;
        } else {
            currentEntry += +buttonPressed;
        }
        updateScreen(currentEntry);
    } else if (buttonPressed === 'C') {
        result = 0;
        currentEntry = '0';
        updateScreen(result);
    } else if (buttonPressed === 'CE') {
        currentEntry = '0';
        updateScreen(result);
    } else if (buttonPressed === '+') {
        prevEntry = parseFloat(currentEntry, 10);
        operation = '+';
        currentEntry = '0';
    } else if (buttonPressed === '-') {
        prevEntry = parseFloat(currentEntry, 10);
        operation = '-';
        currentEntry = '0';
    } else if (buttonPressed === '*') {
        prevEntry = parseFloat(currentEntry, 10);
        operation = '*';
        currentEntry = '0';
    } else if (buttonPressed === '/') {
        prevEntry = parseFloat(currentEntry, 10);
        operation = '/';
        currentEntry = '0';
    } else if (buttonPressed === '=') {
        var currentEntryFloat = parseFloat(currentEntry, 10);
        if (operation === '+') {
            result = prevEntry + currentEntryFloat;
        } else if (operation === '-') {
            result = prevEntry - currentEntryFloat;
        } else if (operation === '*') {
            result = prevEntry * currentEntryFloat;
        } else if (operation === '/') {
            result = prevEntry / currentEntryFloat;
        }
        currentEntry = result.toString();
        operation = null;
        updateScreen(result);
    }
})

function updateScreen(displayValue) {
    $('.screen').html(displayValue);
}
