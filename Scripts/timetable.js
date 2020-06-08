var listOfDays = ['mondayA', 'tuesdayA', 'wednesdayA', 'thursdayA', 'fridayA', 'mondayB', 'tuesdayB', 'wednesdayB', 'thursdayB', 'fridayB'];

function gen_table(json) {
	table = document.getElementById("timetable");
	tableIn = "";
	it = json.timetableData;
	if (it === undefined) {
		console.log ("Uh oh");
		it = {};
	}

	var period;
	var startTime;
	var teacher;
	var room;
	for(var day = 0; day < 10; day++) {
		if(day % 5 == 0) {
			tableIn += "<tr id=\"Week A\">";
		}
		tableIn += "<td id=\"timetableTd\"><table id=\"timetableDay\">";
		period = 1;
		while(typeof it[listOfDays[day]][`Period ${period}`] != "undefined") {
			tableIn += "<tr>";
			// tableIn += `<td></td>`;
			startTime = it[listOfDays[day]][`Period ${period}`].startTime;
			teacher = it[listOfDays[day]][`Period ${period}`].teacher;
			subject = it[listOfDays[day]][`Period ${period}`].subject;
			room = it[listOfDays[day]][`Period ${period}`].room;

			if(teacher != "") {
				tableIn += `<td id="timetableTd2">Period ${period}: ${subject}<br>in ${room} with ${teacher}</td>`;
			}
			else if (room == "sport"){
				tableIn += `<td id="timetableTd2">Sports</td>`;
			}
			else {
				tableIn += `<td id="timetableTd2">Free Period</td>`;
			}
			tableIn += `<td>${startTime}</td>`;

			// console.log(startTime);
			// console.log(teacher);
			// console.log(room);

			// tableIn += "<tr><td>";
			// tableIn += "";
			// tableIn += "</td><td>";
			// tableIn += v.startTime;
			// tableIn += "</td></tr>";
			tableIn += "</tr>";

			if((day % 5 != 2 && period == 3) || (day % 5 == 2 && period == 2)) {
				startTime = it[listOfDays[day]]["Recess"].startTime;
				tableIn += `<tr><td>Recess</td>`;
				tableIn += `<td>${startTime}</td>`;
				tableIn += "</tr>";
			}
			if((day % 5 != 2 && period == 5) || (day % 5 == 2 && period == 4)) {
				startTime = it[listOfDays[day]]["Lunch"].startTime;
				tableIn += `<tr><td>Lunch</td>`;
				tableIn += `<td>${startTime}</td>`;
				tableIn += "</tr>";
			}
			period++;
		}
		tableIn += `<tr><td>End of Day</td><td>${it[listOfDays[day]]["End of Day"].startTime}</td></tr>`
		tableIn += "</table></td>";
		if(day % 5 == 4) {
			tableIn += "</tr>";
		}
	}
	table.innerHTML = tableIn;
}

if (localStorage.getItem("personalTimetable") === null) {
	alert("You have not uploaded a timetable, and appear \nto have reached this location by accident. \nWe are escorting you back to the main page. \n\n\nPlease do not resist.");
	window.location.href = "./index.html";
}
else {
	json = JSON.parse(localStorage.getItem("personalTimetable"));
	console.log(json);
	gen_table(json);
}
