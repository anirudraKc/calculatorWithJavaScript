let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


let display1 = document.getElementById('display1');

let buttons1 = Array.from(document.getElementsByClassName('button1'));

buttons1.map( button1 => {
    button1.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display1.innerText = '';
                break;
            case '=':
                try{
                    display1.innerText = eval(display1.innerText);
                } catch {
                    display1.innerText = "Error!"
                }
                break;
            case '←':
                if (display1.innerText){
                   display1.innerText = display1.innerText.slice(0, -1);
                }
                break;
            default:
                display1.innerText += e.target.innerText;
        }
    });
});