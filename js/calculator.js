//Define the function to create an element with attributes
function createElement(tagname, attribute = {}) {
    let Element = document.createElement(tagname)
    for (let attributeName of Object.keys(attribute)) {
        Element.setAttribute(attributeName, attribute[attributeName]);
    }
    return Element;
}
// Create container and input box
const calcContainer = createElement('div', {
     class: 'container col col-xl-4 col-lg-4 col-md-8 col-sm-10 col-xs-12'
})
const rowDiv = createElement('div', {
     class: 'row'
})
const rowNumDiv = createElement('div', {
     class: 'row secondrow g-0'
})
const colDiv = createElement('div', {
     class: 'col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'
})
const colNumDiv = createElement('div', {
     class: 'num-col col col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9'
})
const colsplDiv = createElement('div', {
     class: 'spl-col col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3'
})
const displayInputbox = createElement('input', {
    class: 'fs-2 col col-xl-12 col-lg-12 rounded-0 col-md-12 col-sm-12 col-xs-12 form-control display',
    id: 'result',
    placeholder: 0,
})

// Create buttons
const cancelBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-info rounded-0 col col-xl-3 col-lg-3 col-md-3 col-sm-3',
    id: 'clear',
})
cancelBtn.textContent = "C"
//
const backspcBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-info rounded-0 col col-xl-3 col-lg-3 col-md-3 col-sm-3 bi bi-arrow-left',
})
backspcBtn.textContent = ""
//
const dotBtn = createElement('button', {
    type: 'button',
    class: 'fs-3 btn btn-l btn-outline-info rounded-0 col col-xl-3 col-lg-3 col-md-3 col-sm-3',
    id: 'dotval'
})
dotBtn.textContent = "."
//
const modulusBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-warning rounded-0 col col-xl-12 col-lg-12 col-md-12 col-sm-12',
    id: 'modulusval'
})
modulusBtn.textContent = "%"
//
const multipleBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-warning rounded-0 col col-xl-3 col-lg-3 col-md-3 col-sm-3',
    id: 'multipleval'
})
multipleBtn.textContent = "*"
//
const divideBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-warning rounded-0 col col-xl-12 col-lg-12 col-md-12 col-sm-12',
    id: 'divideval'
})
divideBtn.textContent = "/"
//
const minusBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-warning rounded-0 col col-xl-12 col-lg-12 col-md-12 col-sm-12',
    id: 'subtract'
})
minusBtn.textContent = "-"
//
const plusBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-warning rounded-0 col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12',
    id: 'add'
})
plusBtn.textContent = "+"
//
const equalBtn = createElement('button', {
    type: 'button',
    class: 'btn btn-lg btn-outline-warning rounded-0 col col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8',
    id: 'equal'
})
equalBtn.textContent = "="

// Append elements to the document
document.body.append(calcContainer);
calcContainer.append(displayInputbox);

calcContainer.append(rowDiv);
rowDiv.append(colDiv);

calcContainer.append(rowNumDiv);
rowNumDiv.append(colNumDiv);
rowNumDiv.append(colsplDiv);

colDiv.append(cancelBtn);
colDiv.append(backspcBtn);
colDiv.append(dotBtn);
colDiv.append(multipleBtn);

colsplDiv.append(divideBtn);
colsplDiv.append(minusBtn);
colsplDiv.append(plusBtn);
colsplDiv.append(modulusBtn);


// Create number buttons
for (let i = 9; i >= 0; i--){
    const createBtn = createElement('button', {
        type: 'button',
        class: 'btn btn-lg btn-outline-secondary rounded-0 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4',
        id: `${i}`
    })
    let value = createBtn.textContent = i;
    colNumDiv.append(createBtn);
    let btnVal = document.getElementById(`${i}`)
    btnVal.addEventListener('click', () => {
        // console.log(value)
        displayInputbox.value += value
    })
}
colNumDiv.append(equalBtn);
document.addEventListener('keypress', (event) => {
    const key = event.key;
    if (/\d/.test(key)) { // Check if the pressed key is a digit
        displayInputbox.value += key;
    } else {
        alert('only numbers key allowed')
    }
})



cancelBtn.addEventListener('click',()=> {
    displayInputbox.value = "";
})

backspcBtn.addEventListener('click', () => {
    displayInputbox.value = displayInputbox.value.slice(0, -1);
})

let plusVal = document.getElementById('add')
plusVal.addEventListener('click', () => {
    displayInputbox.value += add.textContent
})

let minusVal = document.getElementById('subtract')
minusVal.addEventListener('click', () => {
    displayInputbox.value += subtract.textContent
})

let divideVal = document.getElementById('divideval')
divideVal.addEventListener('click', () => {
    displayInputbox.value += divideVal.textContent
})

let multipleVal = document.getElementById('multipleval')
multipleVal.addEventListener('click', () => {
    displayInputbox.value += multipleVal.textContent
})

let dotVal = document.getElementById('dotval')
dotVal.addEventListener('click', () => {
    displayInputbox.value += dotVal.textContent
})

let modulusVal = document.getElementById('modulusval')
modulusVal.addEventListener('click', () => {
    displayInputbox.value += modulusVal.textContent
})

let equalVal = document.getElementById('equal')
equalVal.addEventListener('click', () => {
    try {
        let result;
        result = eval?.(displayInputbox.value)
        displayInputbox.value = result        
    } catch (error) {
        alert('Please give a valid expression') 
        displayInputbox.value = ""        
    }
})   