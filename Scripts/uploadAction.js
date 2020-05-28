<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link href="./Styles/main.css" rel="stylesheet" type="text/css" />
	<link rel="icon" href="./Styles/images/kronosicon.jpg" type="image/icon type">
	<title>Bell Times</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet">
	  
</head>

	
<body>
	
	
<header>
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style>
		.nono {
			display: none;
		}
	</style>
<!-- The sidebar -->
<div class="sidebar">
  <a href="./index.html" id="homeDiv"><i class="fa fa-fw fa-home" id="homeIcon"></i>Home</a> 
  <a href="./times.html" id="loginDiv" style="color: #D4AF37 !important"><i class="fa fa-fw fa-bell" id="loginIcon"></i>Bell Times</a>
    <a href="./calendar.html" id="classesDiv"><i class="fa fa-fw fa-calendar" id="classesIcon"></i>School Calendar</a>
  <a href="./upload.html" id="settingsDiv"><i class="fa fa-fw fa-arrow-up" id="settingsIcon"></i>Upload Timetable</a>
  <a href="./settings.html" id="settingsDiv" style="margin-top: 15px"><i class="fa fa-fw fa-cog" id="settingsIcon"></i>Settings</a>
  
</div>

</header>
 



  <main style="text-align:center">

 <script type="text/javascript" src="./Scripts/timer2.js"></script>
        <div class="css-centre-outside">
      <div class="css-centre-inside">
        <p style="font-size: 17px"><span id="period" style="font-size: 25px !important">Javascript required</span> <span class="nono">of <span id="day">javascript required</span> </span>in</p>
	<p><span id="timer">JAVASCRIPT REQUIRED</span></p>
        <table id="times">
        </table>
	<noscript>Javascript is required for the correct operation of this website. Please enable it for us.</noscript>
      </div>
    </div>
    
  </main>
<script type="text/javascript" src="./Scripts/settingsTheme.js"></script>  
<script>
function parseIcal(file){
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

                console.log("classRoom")
                console.log("classTeacher")
                console.log("classCode")

            }
        }
        reader.readAsText(file);
    })
</script>
<footer>
	<img src="./Styles/images/ruselogo.png" alt="JRAHS Logo" id="ruselogo">
</footer>

</body>
</html>
