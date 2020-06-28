/*
Copyright 2020 Ruse Utilities Group

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
