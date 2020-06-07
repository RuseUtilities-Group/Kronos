var listOfDays = ['mondayA', 'tuesdayA', 'wednesdayA', 'thursdayA', 'fridayA', 'mondayB', 'tuesdayB', 'wednesdayB', 'thursdayB', 'fridayB'];

function gen_table(json) {
	table = document.getElementById("timetable");
	tstr = "";
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
			tstr += "<tr>";
		}
		tstr += "<table>";
		period = 1;
		while(typeof it[listOfDays[day]][`Period ${period}`] != "undefined") {
			tstr += "<tr>";
			// tstr += `<td></td>`;
			startTime = it[listOfDays[day]][`Period ${period}`].startTime;
			teacher = it[listOfDays[day]][`Period ${period}`].teacher;
			subject = it[listOfDays[day]][`Period ${period}`].subject;
			room = it[listOfDays[day]][`Period ${period}`].room;

			if(teacher != "") {
				tstr += `<td>Period ${period}: ${subject}<br>in ${room} with ${teacher}</td>`;
			}
			else if (room == "sport"){
				tstr += `<td>Sports</td>`;
			}
			else {
				tstr += `<td>Free Period</td>`;
			}
			tstr += `<td>${startTime}</td>`;

			// console.log(startTime);
			// console.log(teacher);
			// console.log(room);

			// tstr += "<tr><td>";
			// tstr += "";
			// tstr += "</td><td>";
			// tstr += v.startTime;
			// tstr += "</td></tr>";
			tstr += "</tr>";
			if((day % 5 != 2 && period == 3) || (day % 5 == 2 && period == 2)) {
				startTime = it[listOfDays[day]]["Recess"].startTime;
				tstr += `<td>Recess</td>`;
				tstr += `<td>${startTime}</td>`;
				tstr += "</tr>";
			}
			if((day % 5 != 2 && period == 5) || (day % 5 == 2 && period == 4)) {
				startTime = it[listOfDays[day]]["Lunch"].startTime;
				tstr += `<td>Lunch</td>`;
				tstr += `<td>${startTime}</td>`;
				tstr += "</tr>";
			}
			period++;
		}
		tstr += `<tr><td>End of Day</td><td>${it[listOfDays[day]]["End of Day"].startTime}</td></tr>`
		tstr += "</table>";
		if(day % 5 == 0) {
			tstr += "</tr>";
		}
	}
	table.innerHTML = tstr;
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
