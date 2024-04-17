/*CALCULADORA*/
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r = document.getElementById('r');

var n11 = document.getElementById('n11');
var n12 = document.getElementById('n12');
var r13 = document.getElementById('r13');

var n22 = document.getElementById('n22');
var n23 = document.getElementById('n23');
var r24 = document.getElementById('r24');

var n33 = document.getElementById('n33');
var n34 = document.getElementById('n34');
var r35 = document.getElementById('r35');

function soma(){
    var resultado = n1.valueAsNumber +  n2.valueAsNumber;

    if(isNaN(resultado)) //NOT A NUMBER
        r.textContent = 'você é burro? ';
    else
        r.textContent = resultado;
}

function sub(){
    var resultado = n11.valueAsNumber -  n12.valueAsNumber;

    if(isNaN(resultado)) //NOT A NUMBER
        r13.textContent = 'você é burro? ';
    else
        r13.textContent = resultado;
}

function mult(){
    var resultado = n22.valueAsNumber *  n23.valueAsNumber;

    if(isNaN(resultado)) //NOT A NUMBER
        r24.textContent = 'você é burro? ';
    else
        r24.textContent = resultado;
}

function divi(){
    var resultado = n33.valueAsNumber /  n34.valueAsNumber;

    if(isNaN(resultado)) //NOT A NUMBER
        r35.textContent = 'você é burro? ';
    else
        r35.textContent = resultado;
}