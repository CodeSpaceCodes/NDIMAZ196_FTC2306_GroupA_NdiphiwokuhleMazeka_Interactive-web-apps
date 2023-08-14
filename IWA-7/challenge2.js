const nickname = null//"Timmy";
const firstname = null//"Timothy";
//made the printOut conditional variable to evaluate for the proper string literal to be used
const printOut = (nickname && `, ${nickname}`) || (firstname && `, ${firstname}`) || "!"

console.log(`Good Morning${printOut}`)