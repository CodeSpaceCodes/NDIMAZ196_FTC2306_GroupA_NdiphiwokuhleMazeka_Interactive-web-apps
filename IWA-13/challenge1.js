let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

// fix the function declaration syntax

// this function calculates the number this function is called
const logCalc = () => { 
// this line checks data type of calculated
   // const isString = typeof calculated = 'numerical-string' 
    const calculatedAsNumber = (typeof calculated) === 'string'? parseInt(calculated) : calculated
    calculated = calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()