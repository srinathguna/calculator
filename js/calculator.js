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
     class: 'container col-xl-4'
})
const displayInputbox = createElement('input', {
    class: 'col-xl-12 form-control display',
    placeholder: 0
})

// Create buttons
const cancelBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
})
cancelBtn.textContent = "C"
//
const backspcBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
})
backspcBtn.textContent = "<"
//
const dotBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
    id: 'dotval'
})
dotBtn.textContent = "."
//
const multipleBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
    id: 'multipleval'
})
multipleBtn.textContent = "*"
//
const divideBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
    id: 'divideval'
})
divideBtn.textContent = "/"
//
const minusBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
    id: 'minusval'
})
minusBtn.textContent = "-"
//
const plusBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
    id: 'plusval'
})
plusBtn.textContent = "+"
//
const equalBtn = createElement('button', {
    class: 'btn btn-lg col-xl-3 border-0',
    id: 'equalval'
})
equalBtn.textContent = "="

// Append elements to the document
document.body.append(calcContainer);
calcContainer.append(displayInputbox);
calcContainer.append(cancelBtn);
calcContainer.append(backspcBtn);
calcContainer.append(dotBtn);
calcContainer.append(multipleBtn);
calcContainer.append(divideBtn);
calcContainer.append(minusBtn);
calcContainer.append(plusBtn);
calcContainer.append(equalBtn);

// Create number buttons
for (let i = 0; i <= 9; i++){
    const createBtn = createElement('button', {
        class: 'btn btn-lg col-xl-3 border-0',
        id: `button${i}`
    })
    let value = createBtn.textContent = i;
    calcContainer.append(createBtn);
    let btnVal = document.getElementById(`button${i}`)
    btnVal.addEventListener('click', () => {
        // console.log(value)
        displayInputbox.value += value
    })
}

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

let plusVal = document.getElementById('plusval')
plusVal.addEventListener('click', () => {
    displayInputbox.value += plusVal.textContent
})

let minusVal = document.getElementById('minusval')
minusVal.addEventListener('click', () => {
    displayInputbox.value += minusVal.textContent
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

let result;
let equalVal = document.getElementById('equalval')
equalVal.addEventListener('click', () => {
    // let call = displayInputbox.value
    // console.log(call)
    result = eval?.(displayInputbox.value)
    displayInputbox.value = result
})   