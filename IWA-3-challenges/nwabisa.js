// johannes.js adderd 'export' function so that these variables could be
//accessible to external js files with proper reference.
//this could have been done at the bottom by using the ff sysntax
//export {firstName, surname, role}
export const firstname = "Nwabisa"
export const surname = "Gabe"
export let role = "CEO"

//also changed the private variable data type to const
const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display

// these changes have been made to all the team mates js files