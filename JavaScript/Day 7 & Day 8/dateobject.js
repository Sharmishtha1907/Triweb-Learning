let date = "2023 08 22 5:19:48";
console.log(date);

let dateObj = new Date(date);

console.log("Month",dateObj.getMonth());
console.log("FullYear",dateObj.getFullYear());
console.log("Date",dateObj.getDate());
console.log("time",dateObj.getTime());
console.log("hour",dateObj.getHours());

dateObj.setMonth(7);
console.log(dateObj);

/* OUTPUT

2023 08 22 5:19:48
Month 7
FullYear 2023
Date 22
time 1692681588000
hour 5
2023-08-22T05:19:48.000Z

*/