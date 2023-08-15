const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const Currency = 'R'
const sarahBalanceTofloat = Math.abs(parseFloat(sarahBalance))
// console.log(sarahBalanceTofloat)
const leoBalanceToFloat = Math.abs(parseFloat(leoBalance))
let totalOwed = (leoBalanceToFloat+sarahBalanceTofloat)

const totalOwedString = (totalOwed.toFixed(2)).toString()

let total = "Total amount owed: "
total += Currency+" "+totalOwedString[0]+totalOwedString[1]+" "+totalOwedString[2]+totalOwedString[3]+totalOwedString[4]+totalOwedString[5]+totalOwedString[6]+totalOwedString[7]
// The above line is hardcoded it could be automated using the loops and the length of the string 'totalOwedString'

const leoOutput = (leoBalanceToFloat && `${leoName} ${leoSurname}(Owed: ${Currency} ${leoBalanceToFloat.toFixed(2)})` || `\t\b`)
const sarahOutput = (sarahBalanceTofloat && `${sarahName}${sarahSurname} (Owed: ${Currency} ${sarahBalanceTofloat.toFixed(2)})` || `\t\b`)

console.log(`${leoOutput}\n${sarahOutput}\n\n${divider}\n   ${total}\n${divider}`)