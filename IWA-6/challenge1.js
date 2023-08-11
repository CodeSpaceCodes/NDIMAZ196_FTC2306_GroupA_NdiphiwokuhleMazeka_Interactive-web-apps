const primaryPhone = 'o748105141'
const secondaryPhone = '0219131568'

// Only change below this line
//first coerce the given variables to their numeric values
primaryPhoneToInt = parseInt(primaryPhone)
secondaryPhoneToInt = parseInt(secondaryPhone)

// test if the converted value has a numeric weight or not and assign the result
// to the respective validation variable
const primaryValid = (Number.isNaN(primaryPhoneToInt))? false: true
const secondaryValid = (Number.isNaN(secondaryPhoneToInt))? false: true
// the above lines could have been compounded by using parseInt of the variable
// to be validated as an operand of the Number.inNAN function


console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)

// the trick here is that if a string is coercedto an integer and assigned to
// a variable, then the context of that variable will be recognised as an
// integer meaning NAN is recognised as a type number (Integer)
// hence is is wise to validate in terms in the context of the numerical value
// or weight of the coersed variable