// global variables
const MAX_NUMBER = 3;
const MIN_NUMBER = -3;

const number = document.querySelector('[data-key="number"]')     //data-key refered to data attributes link html element to js for dynamics
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () =>{ 
    const newValue = parseInt(number.value)-1;
    number.value = newValue;
    // console.log(typeof number.value);

    // condition
    if(add.disabled===true){
        add.disabled=false;
    }
    if(newValue <= MIN_NUMBER){
        subtract.disabled=true;
    }
}
const addHandler = () =>{
    const newValue = parseInt(number.value)+1;
    number.value = newValue;
    // console.log(typeof number.value);
    // newValue cannot be re-declared (lexical scope or closure)
    //condition

    if(subtract.disabled === true){
        subtract.disabled=false;
    }
    if(newValue >= MAX_NUMBER){
        add.disabled=true;
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)

// console.log(number, subtract, add)
/*  ---- notes ----- 
    turning a number into a string the following could be done
    (100).toString command

    Java syntex is not always consistent eg:
    parseInt('123')     turns the sting '123' into int 123
    parseString(123)    does not turn int 123 into string '123'
    to turn it into string:
    (123).toString()
    ("123").tiInt()     likewise does not turn string '123' to int 123

*/