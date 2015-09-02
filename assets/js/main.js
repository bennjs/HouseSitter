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
    
    var div = document.getElementById("tripStatus");
    var hu = "<b>Holiday Update:</b> ";
    var intro = "We are currently ";
    
    var today = new Date();
    
    // Section 1 - Pre-Holiday
    var departureDay = new Date('2015-7-18');
    
    // Section 2 - Flight from London to St. Louis & first night in St. Louis
    var londonToSTLDepart = new Date('2015-7-18 12:05:00');
    var londonToSTLArrival = new Date('2015-7-18 23:53:00');
    
    // Section 3 - Flight from St. Louis to Austin & time in Austin
    var stlToAustinDepart = new Date('2015-7-19 18:10:00');
    var stlToAustinArrival = new Date('2015-7-19 23:10:00');
    
    // Section 4 - Flight from Austin to St. Louis & time in St. Louis
    var austinToSTLDepart = new Date('2015-7-26 19:25:00');
    var austinToSTLArrival = new Date('2015-7-26 22:15:00');
    
    // Section 5 - Flight from St. Louis to London
    var stlToLondonDepart = new Date('2015-8-1 00:05:00');
    var stlToLondonArrival = new Date('2015-8-1 11:20:00');
    
    
    
    // Section 1 - Pre-Holiday
    if (today < departureDay) {
        div.innerHTML= hu + "We're flying on the 18th July at 12:05 (GMT)!";
    }
    else if (today < londonToSTLDepart) {
        div.innerHTML= hu + "We're flying today at 12:05 (UK)!";
    }
    
    // Section 2.1 - Flight from London to St. Louis
    else if ((today >= londonToSTLDepart) && (today <= londonToSTLArrival)) {
        div.innerHTML= hu + intro + "flying between London & St. Louis!";
    }
    
    // Section 2.2 - First night in St. Louis
    else if ((today > londonToSTLArrival) && (today < stlToAustinDepart)) {
        div.innerHTML= hu + "We're enjoying our first night in St. Louis!";
    }
    
    // Section 3.1 - Flight from St. Louis to Austin
    else if ((today > stlToAustinDepart) && (today < stlToAustinArrival)) {
        div.innerHTML= hu + intro + "flying between St. Louis & Austin!";
    }
    
    // Section 3.2 - Time in Austin
    else if ((today > stlToAustinArrival) && (today < austinToSTLDepart)) {
        div.innerHTML= hu + "We're in Austin!";
    }
   
    // Section 4.1 - Flight from Austin to St. Louis
    else if ((today > austinToSTLDepart) && (today < austinToSTLArrival)) {
        div.innerHTML= hu + intro + "flying between Austin & St. Louis!";
    }    
    
    // Section 4.2 - Time in St. Louis
    else if ((today > austinToSTLArrival) && (today < stlToLondonDepart)) {
        iv.innerHTML= hu + "We're in St. Louis!";
    }

    // Section 5 - Flight from St. Louis to London
    else if ((today >= stlToLondonDepart) && (today <= stlToLondonArrival)) {
        div.innerHTML= hu + intro + "flying between St. Louis! & London";
    }
    
    // Section 6 - Post Holiday
    else {
        div.innerHTML= hu + "The holiday is over and we're back at <i class=\"fa fa-home\"></i>!";
    }   
}