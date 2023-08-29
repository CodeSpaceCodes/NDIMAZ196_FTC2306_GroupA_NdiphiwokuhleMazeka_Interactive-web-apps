let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

// on all three function declarations, syntax fixed to the proper arrow syntax

/**this function tries to find the number of the number of times the user logged
 * in or function is called */
const logCalc = (calculated) => { 
    const convertToNumberIfString = (typeof calculated)=== 'string'? parseInt(calculated): calculated
    // const calculatedAsNumber = isString ? calculated : parseNumber(calculated)
    calculated = convertToNumberIfString + 1
    return(calculated) 
}

const calcUser = (logCalc) => { 
  if (logCalc > 2) user = 'John'
  if (logCalc > 2) state = 'requesting'
  if (logCalc > 3) state = 'idle'
}

const checkUser = (user, state, calculated) => {
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