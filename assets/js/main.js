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
    var hu = "<b>Holiday Update:</b> ";
    var intro = "We are currently ";
    
    
    // Section 1 - Pre-Holiday
    var departureDay = new Date('2015-7-18');
    
    // Section 2 - Flight from London to St. Louis
    var londonToSTLDepart = new Date('2015-7-18 12:05:00');
    var londonToSTLArrival = new Date('2015-7-18 23:53:00');
    
    // Section 3 - Flight from St. Louis to Austin & time in Austin
    var stlToAustin = new Date('2015-7-19 18:10:00');
    
    // Section 4 - Flight from Austin to St. Louis & time in St. Louis
    var austinToSTL = new Date('2015-7-26');
    
    // Section 5 - Flight from St. Louis to London
    var stlToChicago = new Date();
    var chicagoToLondon = new Date();
    
    
    
    // Section 1 - Pre-Holiday
    if (today < departureDay) {
        div.innerHTML= hu + "We're flying on the 18th July at 12:05 (GMT)!";
    }
    else if (today < londonToWashington) {
        div.innerHTML= hu + "We're flying today at 12:05 (UK)!";
    }
    
    // Section 2 - Flight from London to St. Louis
    else if ((today >= londonToSTLDepart) && (today >= londonToSTLArrival)) {
        div.innerHTML= hu + "flying between London & St Louis!";
    }
    
    // Section 3.1 - Flight from St. Louis to Austin
    
    
    // Section 3.2 - Time in Austin
   

    // Section 4.1 - Flight from Austin to St. Louis
    
    
    // Section 4.2 - Time in St. Louis


    // Section 5 - Flight from St. Louis to London
    
    
    // Section 6 - Post Holiday
    else {
        div.innerHTML= hu + "The holiday is over and we're back at <i class=\"fa fa-home\"></i>!";
    }   
}