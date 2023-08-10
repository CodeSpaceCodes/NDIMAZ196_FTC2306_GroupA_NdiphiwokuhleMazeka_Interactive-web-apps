const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0     //define as integer

let location = "RSA"      //declare by let to allow reassignment in future
let shipping = null
let currency = null

// this is mainly to get the default shipping price together with the applicable
// currency
if (location == "RSA") { //add quotes on the string to be compared to   
    //break the logic comparison and make use of = for issignment
    shipping = 400
    currency = 'R'
    //made use of the if else to tie all the conditions together for evaluation
    //since else alone would anly be tied to the 'if' it immediately follows
}else if(location == "NAM") {//fixed the syntax of if and the comparison 
    currency = "$"
    shipping = 600
}else if(location == "NK"){
    console.log(BANNED_WARNIN)
}else {
    currency = "$"
    shipping = 800
}
// console.log(currency,shipping)


//now we get the exceptions for the discounts

// declare the items sold using let keyword and define them
let shoes = 300*1
let toys = 100*5
let shirts = 150*NONE_SELECTED  // removed quotes on variable to retrieve variable value
let batteries = 35*2
let pens = 5*NONE_SELECTED       //same as line 34
let customers=1

let itemCost = shoes+toys+shirts+batteries+pens    // calculate the cost without shipping
// console.log(currency, itemCost)
if ((itemCost>=1000 && currency=="R")||(itemCost>=60 && currency=="$")){// counld have also compounded the condition &&(customers==1)
    //check the itemCosts if = R1000 or $60

    if(location=="RSA"||location=="NAM"){ // chack if location RSA or NAM
        shipping = 0
        if((shipping == 0)&&(customers>1)){
            console.log(FREE_WARNING)
        }
    }

}
//location = "NK"? console.log(BANNED_WARNIN): console.log(currency,itemCost)   fixed this to
console.log(location=="NK"? BANNED_WARNIN: currency,itemCost+shipping)