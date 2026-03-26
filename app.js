let input = document.querySelector('.input')
let numberOne = document.querySelector('.n-one')
let numberTwo = document.querySelector('.n-two')
let numberThree = document.querySelector('.n-three')
let numberFour = document.querySelector('.n-four')
let numberFive = document.querySelector('.n-five')
let numberSix = document.querySelector('.n-six')
let numberSeven = document.querySelector('.n-seven')
let numberEight = document.querySelector('.n-eight')
let numberNine = document.querySelector('.n-nine')
let numberZero = document.querySelector('.n-zero')
let equals = document.querySelector('.equals')
let add = document.querySelector('.add')
let sub = document.querySelector('.sub')
let mult = document.querySelector('.mult')
let div = document.querySelector('.div')
let clear = document.querySelector('.clear')
let dot = document.querySelector('.dot')


numberOne.addEventListener('click', function(){
    input.value += numberOne.innerHTML
})
numberTwo.addEventListener('click', function(){
    input.value += numberTwo.innerHTML
})
numberThree.addEventListener('click', function(){
    input.value += numberThree.innerHTML
})
numberFour.addEventListener('click', function(){
    input.value += numberFour.innerHTML
})
numberFive.addEventListener('click', function(){
    input.value += numberFive.innerHTML
})
numberSix.addEventListener('click', function(){
    input.value += numberSix.innerHTML
})
numberSeven.addEventListener('click', function(){
    input.value += numberSeven.innerHTML
})
numberEight.addEventListener('click', function(){
    input.value += numberEight.innerHTML
})
numberNine.addEventListener('click', function(){
    input.value += numberNine.innerHTML
})
numberZero.addEventListener('click', function(){
    input.value += numberZero.innerHTML
})
add.addEventListener('click', function(){
    input.value += add.innerHTML
})
sub.addEventListener('click', function(){
    input.value += sub.innerHTML
})
mult.addEventListener('click', function(){
    input.value += mult.innerHTML
})
clear.addEventListener('click', function(){
    input.value = ''
})
dot.addEventListener('click', function(){
    input.value += dot.innerHTML
})
div.addEventListener('click', function(){
    input.value += div.innerHTML
})

equals.addEventListener('click', function(){
    if(input.value.includes('+')) {
       let inputCells =  input.value.split('+')
        let num1 = +inputCells[0];
        let num2 = +inputCells[1];
        input.value = num1 + num2
    }
    if(input.value.includes('-')) {
       let inputCells =  input.value.split('-')
        let num1 = +inputCells[0];
        let num2 = +inputCells[1];
        input.value = num1 - num2
    }
    if(input.value.includes('/')) {
       let inputCells =  input.value.split('/')
        let num1 = +inputCells[0];
        let num2 = +inputCells[1];
        input.value = num1 / num2
    }
    if(input.value.includes('*')) {
       let inputCells =  input.value.split('*')
        let num1 = +inputCells[0];
        let num2 = +inputCells[1];
        input.value = num1 * num2
    }
})