var timetable = document.getElementById("timetableDiv");
if (localStorage.getItem("personalTimetable") !== null) {
	timetable.href = "./timetable.html"
}
