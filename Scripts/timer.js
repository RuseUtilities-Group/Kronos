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
let next = 0;
      let times = [];
      let today = new Date();
      today.setHours(0,0,0,0);
      function timeTil() {
          return (times[next].timeFrom + today.getTime()) - Date.now();
      }
      function timeTilHMS() {
          let tt = timeTil();
          let s = Math.floor(tt / 1000) %60;
          let m = Math.floor(tt / (1000 * 60)) %60;
          let h = Math.floor(tt / (1000 * 60 * 60)) %60;
          return String(h).padStart(2, '0') + ':' +
              String(m).padStart(2, '0') + ':' +
              String(s).padStart(2, '0');
      }
      function timeStringToMS(timeString) {
          let splut = timeString.split(":")
              .map(function(x) {return parseInt(x, 10);});
          console.assert(splut.length == 2, "Valid time string 1");
          console.assert(splut[0] < 24, "Valid time string 2");
          console.assert(splut[1] < 60, "Valid time string 3");
          return 1000*(splut[0]*60*60 + splut[1]*60);
      }
      function update() {
          timer = document.getElementById("timer");
          period = document.getElementById("period");
          let tt = timeTil();
          while (tt < 0) {
              console.log("iteration");
              next++;
              if (next == times.length) {
                  //this only occurs in the event that
                  //the next period is tomorrow
                  next = 0;
                  today.setDate(today.getDate()+1); //tomorrow comes today
              }
              tt = timeTil();
          }
          timer.innerHTML = timeTilHMS();
          period.innerHTML = times[next].periodName;
      }
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', './Scripts/timetableProto1.json', true);
      xhr.onload = function () {
          json = xhr.response;
          table = document.getElementById("times");
          tstr = "";
          for(const [k, v] of Object.entries(json.timetableData)) {
              tstr += "<tr><td>";
              tstr += k;
              tstr += "</td><td>";
              tstr += v.teacher;
              tstr += v.room;
              tstr += "</td></tr>";
              times.push({periodName: k, timeFrom: timeStringToMS(v.startTime)});
          }
          table.innerHTML = tstr;
          times.sort(function(a, b) {return a.timeFrom - b.timeFrom;});
          window.setInterval(update, 1000);
      };
      xhr.send();
    console.log("Change Done Mate")
