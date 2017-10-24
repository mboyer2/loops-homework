// For each problem below, write a set of nested loops that prints the given output. Some of the problems will require you to write if statements in the loops.
// Assume a global array called months is defined as follows:

// Problems:
// ----------

// 1. Write a set of loops that will print out each day of each month in the following format:
// January 1
// January 2
// ...  
// January 30
// January 31
// February 1
// February 2
// ...
// February 27
// February 28
// March 1
// March 2
// ...
// Dec 30
// Dec 31

var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

for ( var i = 0; i < months.length; i++ ){
    for ( k = 1; k < months[i].days + 1; k++ ){
    //start at one because there is no day zero add one to months[i].days account for no 0th day
    
    console.log(months[i].name, k)
    }
}

// 2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).

// For example, your output should look like the following:

// for ( var i = 0; i < 24; i++){
//     for ( var k = 0; k < 60; k++){
//         for ( var l = 0; l <60; l++){
//             console.log( i, ": ",l, ": ", k)
//         }
//     }
// }

// Now, write a function that turns all single digit numbers into their respective two digit format. For example, 
// 1 should be 01 and 9 should be 09. Then use this function to format your output from part 3, so it will now look like the following:

// <pre>
// 01:00:00 AM
// ...
// 12:00:00 PM
// ...
// 01:00:00 PM
// ...
// 12:00:00 AM
// </pre>

// for ( var i = 0; i < 24; i++){
//     for ( var k = 0; k < 60; k++){
//         for ( var l = 0; l <60; l++){
//             concatZero(i)
//             concatZero(l)
//             concatZero(k)
//             console.log(concatZero(i), ":", concatZero(l), ":", concatZero(k))
            
//         }
//     }
// }

// function concatZero(num){
//     if( num.toString().length < 2 ){
//         num = "0" + num
//         return num
//     } else {
//         return num
//     }
// }
































