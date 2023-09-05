// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

// Managing data
const {response:{data:realData}} = data
const {NM372:nwabisa, SV782:scalk} = realData


const createHtml = (recordedData) =>{

    // decomposing the data from the passed argument
const {firstName, surname, id, races} = recordedData

// find the latest date
const latestDateExtract = new Date(races[races.length -1].date)
// console.log(latestDateExtract)
const latestDateDay = latestDateExtract.getDate()
const latestDateMonth = latestDateExtract.getMonth()
const latestDateYear = latestDateExtract.getFullYear()
const latestDate = `${latestDateDay}/${latestDateMonth}/${latestDateYear}`
console.log(latestDate)

// find the lates race time
/**
 * time taken on the latest race in minutes
 */
const latestTimeArray = races[races.length - 1].time
//find total time in min
let timeInMin = null; 
for(let i = 0; i < (latestTimeArray.length); i++){
timeInMin += latestTimeArray[i]
}
// console.log(timeInMin)
/** find time in the right format*/
const findHours = timeInMin/60;
const hours = Math.floor(findHours);
const minutes = (timeInMin%60)
const latestTime = `${hours}:${minutes}`
console.log(latestTime)

// const myDoc = document.querySelector('[data-athlete="NM372"]')
//create the document fragment
const myFrament = document.createDocumentFragment()


const tittle = document.createElement('h2');
tittle.textContent = id;

myFrament.appendChild(tittle)

const dlist1 = document.createElement('dl')
const listItem1 = document.createElement('li')
const listItem2 = document.createElement('li')
const listItem3 = document.createElement('li')
const listItem4 = document.createElement('li')

listItem1.textContent = `Athlete: ${firstName} ${surname}`
myFrament.appendChild(listItem1)

listItem2.textContent = `Total races: ${races.length}`
myFrament.appendChild(listItem2)

listItem3.textContent = `Event date (Latest): ${latestDate}`
myFrament.appendChild(listItem3)

listItem4.textContent = `Total time (Lates): ${latestTime}`
myFrament.appendChild(listItem4)
return myFrament
}
// myDoc.appendChild(myFrament)

/**********/
// const createHtml = (athlete) => {
// const {firstName, surname, id, races} = athlete;
// const 

//   firstName, surname, id, races = athlete
//   [date], [time] = races.reverse()

//   const fragment = document.createDocumentFragment();

//   const title = document.createElement("h2");
//   title.textContent = id;
//   console.log(fragment)
//   fragment.appendChild(title);

//   const list = document.createElement(dl);

//   const day = date.getDate();
//   const month = MONTHS[date.month];
//   const year = date.year;

//   first, second, third, fourth = timeAsArray;
//   total = first + second + third + fourth;

//   const hours = total / 60;
//   const minutes = total / hours / 60;

//   list.innerHTML = /* html */ `
//     <dt>Athlete</dt>
//     <dd>${firstName surname}</dd>

//     <dt>Total Races</dt>
//     <dd>${races}</dd>

//     <dt>Event Date (Latest)</dt>
//     <dd>${day month year}</dd>

//     <dt>Total Time (Latest)</dt>
//     <dd>${hours.padStart(2, 0) minutes}</dd>
//   `;

//   fragment.appendChild(list);
// }

// createHtml(nwabisa)
// [NM372], [SV782] = data
document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(nwabisa))
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(scalk))