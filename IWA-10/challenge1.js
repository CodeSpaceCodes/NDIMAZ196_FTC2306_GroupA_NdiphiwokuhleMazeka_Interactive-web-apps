const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment
// checks for match in the holiday object keys
console.log(holidays[futureId] && holidays[futureId].name || `ID ${futureId} not created yet`)

/*flags */
let idChange = 'false'
let nameChange = 'false'
let dateChange = 'false'
/**string literals */
const newDateEvaluation = `New date is earlier:`
const idChanged = `ID change:`
const nameChanged = `Name change:`
const dateChanged = `Date change:`

const correctDate = new Date(`25 December ${currentYear} 00:00`)
//create copied object for temporary storage changes storage
const copied = {
    id: holidays[christmas].id,
    name: holidays[christmas].name,
    date: holidays[christmas].date
}
//check if correct date is earlier or not
if(holidays[christmas].date>correctDate){
    console.log(`${newDateEvaluation} true`)        //find the correct date and make applicable changes
    findTheCorrectDate(copied, correctDate)
    nameChange = copied.name
    dateChange = copied.date
}else{
    console.log(`${newDateEvaluation} false`)
}
console.log(`${idChanged} ${idChange}\n${nameChanged} ${nameChange}\n${dateChanged} ${dateChange.getDate()}/${dateChange.getMonth()+1}/${dateChange.getFullYear()}`)
// console.log(copied)

// finds the correct date and updates the name and initial date
function findTheCorrectDate(objectToBeModified ,newDate){
    objectToBeModified.name = 'X-mas'
    objectToBeModified.date = newDate
}

// //find the first holiday
// Note! originally the "new Date()" command returns an object, but once it is
// operated within an object, it return a string data type inside that object
let firstHoliday = Date.parse(holidays[0].date)
for(let i = 0; i < futureId; i++){
    if(firstHoliday > Date.parse(holidays[i].date)){
        firstHoliday = Date.parse(holidays[i].date)
    }
}

firstHoliday = new Date(firstHoliday)
const firstHolidayDate = firstHoliday.getDate()<10? `0${firstHoliday.getDate()}`: firstHoliday.getDate()
const firstHolidayMonth = (firstHoliday.getMonth() + 1)<10? `0${(firstHoliday.getMonth() + 1)}`: firstHoliday.getMonth() + 1
const firstHolidayYear = firstHoliday.getFullYear()
console.log(`The first holiday in the year: ${firstHolidayDate}/${firstHolidayMonth}/${firstHolidayYear}`)
// end first holiday

//find the last holiday
let lastHoliday = Date.parse(holidays[0].date)
for(let i = 0; i < futureId; i++){
    if(lastHoliday < Date.parse(holidays[i].date)){
        lastHoliday = Date.parse(holidays[i].date)
    }
}

lastHoliday = new Date(lastHoliday)
const lastHolidayDate = (lastHoliday.getDate()<10)? `0${lastHoliday.getDate()}`: lastHoliday.getDate()
const lastHolidayMonth = (lastHoliday.getMonth() + 1)<10? `0${(lastHoliday.getMonth() + 1)}`: lastHoliday.getMonth() + 1
const lastHolidayYear = lastHoliday.getFullYear()
console.log(`The last holiday in the year: ${lastHolidayDate}/${lastHolidayMonth}/${lastHolidayYear}`)
// end last holiday


//generate random random date
const randomNumber = Math.floor(Math.random()*futureId)

let randomDate = new Date (holidays[randomNumber].date)
console.log(randomDate)
const randomDateDay = randomDate.getDate()<10? `0${randomDate.getDate()}`: randomDate.getDate()
const randomDateMonth = (randomDate.getMonth() + 1)<10? `0${(randomDate.getMonth() + 1)}`: randomDate.getMonth() + 1
const randomDateYear = randomDate.getFullYear()

console.log(`Random date: ${randomDateDay}/${randomDateMonth}/${randomDateYear}`)
//end random date