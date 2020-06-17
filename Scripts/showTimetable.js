var timetable = document.getElementById("timetableDiv");
var login = document.getElementById("loginDiv");

if (localStorage.getItem("personalTimetable") !== null) {
	timetable.href = "./timetable.html"
	login.href = "./times.html"
}

if (localStorage.getItem("personalTimetable") === null) {
	login.href = "./timesNoTimetableDetected.html"
}
