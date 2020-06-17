var timetable = document.getElementById("timetableDiv");
var login = document.getElementById("loginDiv");
var enter = document.getElementById("buttonEnterClasses");

if (localStorage.getItem("personalTimetable") !== null) {
	timetable.href = "./timetable.html"
	login.href = "./times.html"
	enter.href = "./times.html"
}

if (localStorage.getItem("personalTimetable") === null) {
	login.href = "./timesNoTimetableDetected.html"
	enter.href = "./timesNoTimetableDetected.html"
}
