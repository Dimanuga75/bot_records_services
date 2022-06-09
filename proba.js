let indexDate = "ПОНЕДЕЛЬНИК 06.06";
let dateRec = indexDate[indexDate.length - 5];
if (dateRec === "0") {
  dateRec = indexDate[indexDate.length - 4];
} else {
  dateRec = indexDate[indexDate.length - 5] + indexDate[indexDate.length - 4];
}
let monthRec = indexDate[indexDate.length - 2];
if (monthRec === "0") {
  monthRec = indexDate[indexDate.length - 1] - 1;
} else {
  monthRec =
    indexDate[indexDate.length - 2] + indexDate[indexDate.length - 1] - 1;
}
let indexTime = "9:30";
let minutesRec =
  indexTime[indexTime.length - 2] + indexTime[indexTime.length - 1];
let hoursRec = indexTime[indexTime.length - 5];
if (hoursRec === undefined) {
  hoursRec = indexTime[indexTime.length - 4];
  console.log("ok");
} else {
  hoursRec = indexTime[indexTime.length - 5] + indexTime[indexTime.length - 4];
}
let mmsHours = 3600000;
let timeZone = 8;
let currentYear = new Date().getFullYear();
let currentDate = Date.now();

console.log(currentDate);
let dateRecordsMM = Date.now(
  currentYear,
  monthRec,
  dateRec,
  hoursRec,
  minutesRec
);
console.log(dateRecordsMM);
let intervalTime = dateRecordsMM - currentDate;
console.log(intervalTime);
