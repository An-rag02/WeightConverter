const btnEl = document.getElementById('btn');
const inpEl = document.getElementById('inp');
const outputEl = document.getElementById('output');
const btn2El = document.getElementById('btn2');
const btn3El = document.getElementById('btn3');
const btn4El = document.getElementById('btn4');
const ktpEl = document.getElementById('ktp');
const ptkEl = document.getElementById('ptk');
const btn5El = document.getElementById('btn5');
const inp2El = document.getElementById('inp2');
const btn6El = document.getElementById('btn6');
const headingEl = document.getElementById('heading');


function convertKTP(){
    let input = parseFloat(inpEl.value);
    if(!isNaN(input)){
        const pounds = input * 2.20462;
        outputEl.innerText = `${input} kilograms = ${pounds.toFixed(2)} pounds`;
 
    }else{
        outputEl.innerText = 'Please enter a valid number';
    }

}

function convertPTK(){
    let input = parseFloat(inp2El.value);
    if(!isNaN(input)){
        const kg = input * 0.453592;
        outputEl.innerText = `${input} pounds = ${kg.toFixed(2)} kilograms`;
 
    }else{
        outputEl.innerText = 'Please enter a valid number';
    }
}

function refresh(){
    inpEl.value = '';
    inp2El.value = '';
    outputEl.innerHTML = '';
}


btnEl.addEventListener('click', convertKTP);
btn2El.addEventListener('click', refresh);

btn3El.addEventListener('click', function(){
    headingEl.innerText = 'Pounds to Kilograms';
    refresh();
    ktp.style.display = 'none';
    ptk.style.display = 'block';
});

btn4El.addEventListener('click', function(){
    headingEl.innerText = 'Kilograms to Pounds';
    refresh();
    ktpEl.style.display = 'block';
    ptkEl.style.display = 'none';
});

btn5El.addEventListener('click', convertPTK);
btn6El.addEventListener('click', refresh);