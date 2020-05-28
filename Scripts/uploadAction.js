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
