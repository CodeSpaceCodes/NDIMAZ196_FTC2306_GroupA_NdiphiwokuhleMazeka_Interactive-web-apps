// declaration made by let instead of const to allow reassignment of variable
// used = to assign first two variables

let date = 2050
let status = 'student'
let count = 0

if (date == "2050")
 { //replaced = with == for equality check in which case the year is in the form of a string
    console.log('January ', ' New Year’s Day')
	console.log('March', 'Human Rights Day')
	date = 'April'    // reassignes date, but why? I am not sure what this achieves but ok!
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4   // removed the declaration key function. this could be written as count+=4

	if (status == "student") {//made equality check by replacing = with ==
        console.log('June', 'Youth Day')
        count = count + 1       //removed the declaration key word 'let'. this could also be written as count+=1 
    }

    console.log('August', 'Women’s Day')
    console.log('September', 'Heritage Day')
    date = 'December'       //update date
    status = "parent"       //update status
    console.log(date, 'Day of Reconciliation')
    count = count + 3   // removed let used for declaration. this could also be written as count+=3

    if (status == "parent") {// added equality condition check
        console.log(date, 'Christmas Day')
        count = count + 1       // removed the declaration keyword let. could be written as count+=1
    }

    console.log(date, 'Day of Goodwill')
    count = count + 1   //removed let declaration keyword, could be writteen
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)