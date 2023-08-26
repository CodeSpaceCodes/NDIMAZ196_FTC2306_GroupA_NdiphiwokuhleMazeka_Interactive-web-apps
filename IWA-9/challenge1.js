const salary = 4000;
const lodging = 'house'
const size = 'small'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2
}
  
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%'
}
// fixed the variable or identifier syntax (put quotes around em)
const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax['913']) / 100        // first convert tax to percent. fixed object referencing
const startingAfterTax = salary *(1 - taxAsDecimal)      // use appropreate formula, used brackets
const type = rent[`${size}-${lodging}`]     // extracted rent through interpolated string matching the given string
const balance = startingAfterTax - expenses.transport - expenses.food - type // used type which has the rent amount
console.log(balance.toFixed(2))     //added toFixed for the specified decimal places.