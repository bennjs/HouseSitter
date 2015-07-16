function helloWorld() {
    document.getElementById("hello").innerHTML="Hello, House Sitter!";
}

function toggleVisibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'none' || e.style.display=='')
    {
        e.style.display = 'block';
    }
    else 
    {
        e.style.display = 'none';
    }
}

function flightTracker() {
    var today, day, month;    
    today = new Date();
    day = today.getDate();
    month = today.getMonth() + 1;
    hour = today.getHours();
        
    if (day == 18 && month == 7) {
        document.getElementById("flightCheck").innerHTML="Track the outbound flight here: LINK";
    }
    else if ((day == 31 && month == 7) || ( day == 01 && month == 08)) {
        document.getElementById("flightCheck").innerHTML="Track the return flight here: LINK";
    }
    else {
        document.getElementById("flightCheck").innerHTML="";
    }
}

function timeNow() {
    var d = new Date(),
    h = d.getHours();
    m = d.getMinutes();
    i = h + ':' + m;
    if (i < '15:25') {
        document.getElementById("trip-status").innerHTML = "True";
    }
    else {
        document.getElementById("trip-status").innerHTML = "False";
    }
    
    
}

// tripStatus() uses the time and date in the UK (where it's most likely to be accessed) to update
// the trip-status <p> in the HEADER with information about where we are and when we fly.
function tripStatus() {
    var today;
    
    // Days, Month & Year
    var day, month, year;    
    today = new Date();
    day = today.getDate();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    theDate = day + '-' + month + '-' + year;
    
    // Time in H:M
    var hour, mins, time;
    hour = today.getHours();
    mins = today.getMinutes();
    time = hour + ':' + mins;
        
    var div = document.getElementById("tripStatus");
    var intro = "We are currently ";
    var debug = "[Debug]";
    
    // document.getElementById("debug").innerHTML= theDate; // For debugging tripStatus output in Header.
    
    // Flight to the USA - 
    if (theDate == '18-7-2015') {
        if (time < '12:05') {
            div.innerHTML= "We're flying today at 12:05 (UK)!";
        }
        else if ((time >= '12:05') && (time < '20:15')) {
            div.innerHTML= intro + "flying from London to Washington Dulles International!"; //UA919
        }
        else if (time > '23:53') {
            div.innerHTML= "We're in St Louis!";
        }
        else {
            div.innerHTML= intro + "flying between Washington Dulles & St Louis!"; //UA3434
        }
    }
    // Flight from STL --> AUSTIN - WN3054 (South West)
    else if (theDate == '19-7-2015'){
        if (time < '21:15') {
            div.innerHTML=  intro + "in St Louis but our flight to Austin leaves at 21:15 (UK)";
        }
        else if (time > '23:10') {
            div.innerHTML= "We're in Austin!";
        }
        else {
            div.innerHTML=  intro + "flying between St Louis & Austin!";
        }
    }
    // Our stay in Austin - 19th - 26th
    else if ((theDate > '19-7-2015') && (theDate < '26-7-2015')) {
        div.innerHTML= "We're in Austin!";
    }
    // Our stay in STL
    else if ((theDate > '26-7-2015') && (theDate < '1-8-2015')) {
         
    }
    
    // Flight from AUSTIN --> STL - WN2876 (South West)
    // 26th 19:25. 22:25 landing. UK time
    else if (theDate == '26-7-2015') {
        if (time < '19:25') {
            div.innerHTML= "We're in Austin!";
        }
        else if (time > '22:15') {
            div.innerHTML= "We're in St Louis!";
        }
        else {
            div.innerHTML=  intro + "flying between Austin & St Louis!";
        }
    }
    
    // Flight home
    //  STL (00:35 1st) --> ORD (01:57 1st)
    // ORD (03:05 1st) --> LHR (11:20 1st)
    else if (theDate == '1-8-2015') {
        if (time < '00:35') {
            div.innerHTML= "We're flying today at 00:35 (UK)!";
        }
        else if ((time >= '00:35') && (time > '01:57')) {
             intro + "flying from St Louis to Chicago!"; //UA3705
        }
        else if (time > '01:57') {
            div.innerHTML= "We're in Chicago!";
        }
        else {
            div.innerHTML=  intro + "flying between Chicago & London!" //UA938
        }
     }
    
    else {
        div.innerHTML= "We're in the UK!";
    }
}


    
    

    
