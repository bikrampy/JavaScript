let myDate = new Date()

// console.log(myDate); // 2025-08-28T04:58:16.369Z
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2004, 0, 13)
// console.log(myCreatedDate); // 2004-01-12T18:30:00.000Z (UTC+0)

// let myCreatedDate = new Date(2004, 0, 13, 12, 30, 30)
// console.log(myCreatedDate); // 2004-01-13T07:00:30.000Z (UTC+0)

// let myCreatedDate = new Date('2004-01-13') // treated as UTC
// console.log(myCreatedDate); // 2004-01-13T00:00:00.000Z

// let myCreatedDate = new Date("01-13-2004") // treated as local time
// console.log(myCreatedDate); // 2004-01-12T18:30:00.000Z

// console.log(myDate.toString()); // Thu Aug 28 2025 10:29:39 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Thu Aug 28 2025

// console.log(myDate.toLocaleString()); // 8/28/2025, 10:30:25 AM
console.log(myDate.toLocaleString('en-IN', {
    weekday: "short", // "long", "short", "narrow"
    year: "numeric", // "numeric", "2-digit"
    month: "long", // "numeric", "2-digit", "long", "short", "narrow"
    day: "numeric", // "numeric", "2-digit"
    hour: "2-digit", // "numeric", "2-digit"
    minute: "2-digit", // "numeric", "2-digit"
    second: "2-digit" // "numeric", "2-digit"
}))

// console.log(Date.now()); // current time in ms since Jan 1, 1970.

// console.log(myDate.getTime()); // ms for that Date object.

// console.log(myDate.getFullYear()); // 2025
// console.log(myDate.getMonth()); // 0 => January
// console.log(myDate.getDate()); // 7
// console.log(myDate.getDay()); // 0 => Sunday
// console.log(myDate.getHours()); // according to local time
// console.log(myDate.getMinutes()); // according to local time
// console.log(myDate.getSeconds()); // according to local time
