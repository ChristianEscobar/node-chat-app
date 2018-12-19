let moment = require('moment');

// Jan 1st 1970 00:00:00 am

// let date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am HH:MM am
// don't pad hours, pad minutes



let date = moment();
console.log(date.format('h:mm a'));