// toggles the visibility of 'answers'
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

// Ensures the closing time of Greenwich Park are correct depending on the month.
function parkOpeningHours() {
    var time;
    
    switch (new Date().getMonth()) {
        case 0: // January
        case 1: // February
        case 10: // November
        case 11: // December
            time = "18:00.";
            break;
        case 2: // March
            time = "19:00(18:00 from the start of BST).";
            break;
        case 3: // April
        case 8: // September
            time = "20:00.";
            break;
        case 4: // May
        case 7: // August
            time = "21:00.";
            break;
        case 5: // June
        case 6: // July
            time = "21:30.";
            break;
        case 9: // October
            time = "19:00 (18:00 from the end of BST)."
    }
    
    document.body.innerHTML = document.body.innerHTML.replace('parkCloseTime', time);
}

// adds a zero to the front of hours or minutes < 10
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
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
    hour = addZero(today.getHours());
    mins = addZero(today.getMinutes());
    time = hour + ':' + mins;
        
    var div = document.getElementById("tripStatus");
    var hu = "<b>Holiday Update:</b> "
    var intro = "We are currently ";
    
    // Flight to the USA - 
    if (theDate == '18-7-2015') {
        if (time < '12:05') {
            div.innerHTML= hu + "We're flying today at 12:05 (UK)!";
        }
        else if ((time >= '12:05') && (time < '20:15')) {
            div.innerHTML= hu + intro + "flying from London to Washington Dulles!<br><i class=\"fa fa-plane\"></i><a href=\"https://www.google.co.uk/search?q=UA919\"> Track the flight!</a>"; //UA919
        }
        else if (time > '23:53') {
            div.innerHTML= hu + "We're in St Louis!";
        }
        else {
            div.innerHTML= hu + intro + "flying between Washington Dulles & St Louis!<br><i class=\"fa fa-plane\"></i><a href=\"https://www.google.co.uk/search?q=UA3434\"> Track the flight!</a>"; //UA3434
        }
    }
    // Flight from STL --> AUSTIN - WN3054 (South West)
    else if (theDate == '19-7-2015'){
        if (time < '21:15') {
            div.innerHTML= hu +  intro + "in St Louis but our flight to Austin leaves at 21:15 (UK)";
        }
        else if (time > '23:10') {
            div.innerHTML= hu + "We're in Austin!";
        }
        else {
            div.innerHTML= hu +  intro + "flying between St Louis & Austin!<br><i class=\"fa fa-plane\"></i><a href=\"https://www.google.co.uk/search?q=WN3054\"> Track the flight!</a>";
        }
    }
    // Our stay in Austin - 19th - 26th
    else if ((theDate > '19-7-2015') && (theDate < '26-7-2015')) {
        div.innerHTML= hu + "We're in Austin!";
    }
    // Our stay in STL
    else if ((theDate > '26-7-2015') && (theDate < '1-8-2015')) {
         div.innerHTML= hu + "We're in St. Louis!";
    }
    
    // Flight from AUSTIN --> STL - WN2876 (South West)
    // 26th 19:25. 22:25 landing. UK time
    else if (theDate == '26-7-2015') {
        if (time < '19:25') {
            div.innerHTML= hu + "We're in Austin!";
        }
        else if (time > '22:15') {
            div.innerHTML= hu + "We're in St Louis!";
        }
        else {
            div.innerHTML= hu +  intro + "flying between Austin & St Louis!<br><i class=\"fa fa-plane\"></i><a href=\"https://www.google.co.uk/search?q=WN2876\"> Track the flight!</a>";
        }
    }
    
    // Flight home
    //  STL (00:35 1st) --> ORD (01:57 1st)
    // ORD (03:05 1st) --> LHR (11:20 1st)
    else if (theDate == '1-8-2015') {
        if (time < '00:35') {
            div.innerHTML= hu + "We're flying today at 00:35 (UK)!";
        }
        else if ((time >= '00:35') && (time > '01:57')) {
             intro + "flying from St Louis to Chicago!<br><i class=\"fa fa-plane\"></i><a href=\"https://www.google.co.uk/search?q=UA3705\"> Track the flight!</a>"; //UA3705
        }
        else if (time > '01:57') {
            div.innerHTML= hu + "We're in Chicago!";
        }
        else {
            div.innerHTML= hu +  intro + "flying between Chicago & London!<br><i class=\"fa fa-plane\"></i><a href=\"https://www.google.co.uk/search?q=UA938\"> Track the flight!</a>" //UA938
        }
     }
     
     else if (theDate > '1-8-2015') {
         div.innerHTML= hu + "The holiday is over and we're back at <i class=\"fa fa-home\"></i>!";
     }
    
    else {
        div.innerHTML= hu + "We're in London! <i class=\"fa fa-home\"></i>";
    }
}