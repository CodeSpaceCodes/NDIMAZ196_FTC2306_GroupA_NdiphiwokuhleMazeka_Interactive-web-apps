const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = '00';
const minuteOfDay = '00';

// Only change below this line

/*pseudo code
*   if midnight calculate balance(hrs = min = 0)

*   if time not known do not calculate balance (hrs = min = null)
*   to get the balance deduct cost
*   cost is interest(8% of salary),food, transport, rent
-   interest needs to be converted to a propernumerical value or an integer
-   It seems the % operator is ignored by the debbuger making it easier to
    convert the string to a real integer

    *   also declare currency and log both the currency and the remainder of the
*   amount after deduction
*   round the value to two decimal places

*/

// const taxToInt = parseInt(tax)
// console.log(typeof taxToInt, taxToInt) mainly to check what data type does coercing tax to integer give

let balance = 0     // define balance out of in this global scope


if (((hourOfDay !== null) && (minuteOfDay !== null)) && ((hourOfDay === '00') && (minuteOfDay === '00'))) {
    const taxAsDecimal = taxToInt / 100       //convert tax to decimal
    const startingAfterTax = salary - (salary*taxAsDecimal)
    balance = startingAfterTax - transport - food - rent
}

console.log(balance.toFixed(2))