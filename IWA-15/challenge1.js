// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
/**
 * given list data object, extract the numbers from all three arrays in the
 * object
 * 
 * combine all values into a new single array called result
 * 
 * extractBiggest function runs 15 times
 * 
 * it grabs a single number and adds it to the result array
 * 
 * this extractBiggest function mustlook at the last item in each of the list
 * arrays
 * 
 * it should then select the giggest item and remove it from that array list and
 * move it to result
 * 
 * 
 */
const result = []

const [[,a], [,b], [,c]] = data.lists
// console.log(first)

this.first = a;
this.second = b;
this.third = c;

function extractBiggest(){
    let biggest = 0
// console.log(this.first.length)
// now find the biggest end index value
if(this.first[this.first.length-1]>biggest){
    biggest = this.first[this.first.length - 1]
}
if(this.second[this.second.length-1]>biggest){
    biggest = this.second[this.second.length - 1]
}
if(this.third[this.third.length-1]>biggest){
    biggest = this.third[this.third.length - 1]
}

// pop where applicable
if(biggest === this.first[this.first.length - 1]){
    this.first.pop(this.first[this.first.length - 1])
}
if(biggest === this.second[this.second.length - 1]){
    this.second.pop(this.second[this.second.length - 1])
}
if(biggest === this.third[this.third.length - 1]){
    this.third.pop(this.third[this.third.length - 1])
}

return biggest;
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)