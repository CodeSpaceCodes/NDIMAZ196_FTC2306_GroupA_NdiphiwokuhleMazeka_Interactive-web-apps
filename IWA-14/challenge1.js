const firstName = 'John';
const age = 35;
const hobby = 'Coding';
// added const for variable dicleration

// Added argument for the function
const logTwice = (statement) => {
  console.log(statement)
  console.log(statement)
}
//renamed the function to prevent identifier conflict
function hobbby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobbby()