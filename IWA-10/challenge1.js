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


//create a version of the Christmas object in the copied object
//create the correct date on a seperate variable
//create a new name on a seperate variable
//check for an earlier date between the new date and the initial one
//if new date is earlier than the initial date then
// log on the console 'The new date is earlier: True' 
//then update the initial date to the newer date
//update the object name to the new name
//Otherwise if the new date is later log false on the console
//while the new date is earlier, then
//apply the changes to the copied object
//where change have been made, the updated change should be logged in on the chane tracking variable
//else log false on the change tracking variable

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
console.log(`${idChanged} ${idChange}\n${nameChanged} ${nameChange}\n${dateChanged} ${dateChange.getDate()}/${dateChange.getMonth()}/${dateChange.getFullYear()}`)
// console.log(copied)

// finds the correct date and updates the name and initial date
function findTheCorrectDate(objectToBeModified ,newDate){
    objectToBeModified.name = 'X-mas'
    objectToBeModified.date = newDate
}


// copied = holidays.christmas
// copied = { name: 'X-mas Day' }
// correctDate = copied.date
// correctDate.hours = 0
// correctDate.minutes = 0
// isEarlier = copied.date < holidays[6].date
// console.log('New date is earlier:', isEarlier)
// if (isEarlier) copied.date = correctDate
// console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
// console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
// console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

// const firstHolidayTimestamp = Math.min(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const lastHolidayTimestamp = Math.max(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const firstDay = firstHolidayTimestamp.getDate
// const firstMonth = firstHolidayTimestamp.getMonth
// const lastDay = lastHolidayTimestamp.getDate
// const lastMonth = lastHolidayTimestamp.getMonth

// console.log('{firstDay}/{firstMonth}/{currentYear}')
// console.log('{lastDay}/{lastMonth}/{currentYear}')

// const randomHoliday = holidays[Math.random]
// console.log(randomHoliday.date)