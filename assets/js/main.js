function helloWorld() {
    document.getElementById("hello").innerHTML="Hello, World!";
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