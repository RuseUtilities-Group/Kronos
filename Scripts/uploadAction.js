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
function parseIcal(){
    
    var icalFile = document.getElementById("myFile");
    localStorage.setItem("icalFile")
    var icalFile = localStorage.getItem("icalFile")
    var returno = ""
    return new Promise(res => {
        const reader = new FileReader();
        reader.onload = (e)=>{
            const fileData = e.target.result;
            const rawEvents = ICAL.parse(fileData)[2];

            for(let i=0;i<rawEvents.length;i++){
                const event = processEvent(rawEvents[i]);

                const currDay = event.dtstart.getDay();
                const currDate = event.dtstart.getDate();
                const currMonth = event.dtstart.getMonth();
                const currYear = event.dtstart.getFullYear();
                var classRoom = event.location
                var classTeacher = event.description
                var classCode = event.summary
                
                // You can now use string stuff to pull information out of event.description, event.summary and event.location

                var returno = classRoom + classTeacher + classCode

            }
        }
        reader.readAsText(file);
	document.getElementById("outputLOL").innerHTML = returno;
}
    })
