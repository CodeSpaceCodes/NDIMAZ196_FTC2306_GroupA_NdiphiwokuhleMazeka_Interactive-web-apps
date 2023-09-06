// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
// here why does it have a zero for the date? check date mdn
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below this line

const createArray = (length) => {
    
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    return result;
};

const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const result = [];

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        });

        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const day = dayIndex - startDay + weekIndex * 7 + 1;
            const isValid = day > 0 && day <= daysInMonth;

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            });
        }
    }

    return result;
};

const addCell = (existing, classString, value) => {
    return `${existing}<td class="${classString}">&nbsp;${value}&nbsp;</td>`;
};

const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) {
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);

        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell';

            if (isToday) classString += ' table__cell_today';
            if (isWeekend) classString += ' table__cell_weekend';
            if (isAlternate) classString += ' table__cell_alternate';

            inner = addCell(inner, classString, value);
        }

        result += `<tr>${inner}</tr>`;
    }

    return result;
};

// Only edit above this line

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);


// Only edit above
/*
const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
*/


/* html, css and javascript code snipets are provided. the css and html codes
should not be changed, all the changes required should be made on the javascript
code snippet. The purpose is to create a calender that automatically calculates
the current month and day, then displays all dates in a grid format.
The html code snippet provides a table of in which through javascript the days
of the week should be populated in an organized order. In the java script code,
the only place that may be edited is between the two comments provided in the
java script code snippet. This includes updating the createData, createCell and
createHtml functions. At the moment the javascript code snippet is broken
particularly between the two comments. Please fix the JavaScript code between
the two comments, to render the current month (dynamically). The current day
should also be highlighted in blue.

here is the summary of what is required.
Do not change the html and css code snippets. change only the JavaScript snippet
and only between the two comments
The fixed JavaScript snippet should interface correctly with the html and css
snippets provided.
The current month and year should be displayed above the calender.
Each week must be indicated in the left most column with the month starting with
week 1.
Weeks should alternate between white and grey.
Each date of the month should be displayed under the corresponding weekday.
The current day should be highlighted in blue.
Again, do not change the html and css snippets, and only make changes between
the two comments in JavaScript code snippet. 
 */