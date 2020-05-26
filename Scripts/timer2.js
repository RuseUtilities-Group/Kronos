let next = 0;
let jsonPath = 'Scripts/'
      let times = [];
      let today = new Date();
      function day() {return today.getDay();}
      let dateNamesFrom = {"sunday":0, "monday":1, "tuesday":2, "wednesday":3,
			   "thursday":4, "friday":5, "saturday":6}
      let dateNamesTo = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
			 "Friday", "Saturday"]
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
      function gen_table(json) {
	  table = document.getElementById("times");
          tstr = "";
          for(const [k, v] of Object.entries(json.timetableData[dateNamesTo[day()].toLowerCase()])) {
              tstr += "<tr><td>";
              tstr += k;
              tstr += "</td><td>";
              tstr += v.startTime;
              tstr += "</td></tr>";
              times.push({periodName: k, timeFrom: timeStringToMS(v.startTime)});
          }
          table.innerHTML = tstr;
	  times.sort(function(a, b) {return a.timeFrom - b.timeFrom;});
      }

      function updateDay() {
	  document.getElementById("day").innerHTML = dateNamesTo[day()];
      }
      function update(json) {
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
		  times = [];
                  today.setDate(today.getDate()+1); //tomorrow comes today
		  gen_table(json);
		  updateDay();
              }
              tt = timeTil();
          }
          timer.innerHTML = timeTilHMS();
          period.innerHTML = times[next].periodName;
      }

      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', jsonPath + 'bellTimes.json', true);
      xhr.onload = function () {
          json = xhr.response;
	  gen_table(json);
	  updateDay();
	  update(json);
          window.setInterval(update, 1000);
      };
      xhr.send();
