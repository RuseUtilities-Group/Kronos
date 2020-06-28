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
var screenWidth = screen.width;
var maxIconShowWidth = 1375;
//home icon loooool
var a = document.getElementById("homeIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Home";
}
//Bell Times Icon looooool
var a = document.getElementById("belltimerIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Bell Times";
}

//Timetable Icon looooool
var a = document.getElementById("timetableIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Timetable";
}

var a = document.getElementById("calendarIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Calendar";
}

var a = document.getElementById("linksIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Links";
}

var a = document.getElementById("staffIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Staff List";
}

var a = document.getElementById("settingsIcon");
if(screenWidth > 1375){
    a.innerHTML = "";
}
else {
    a.innerHTML = "Settings";
}
