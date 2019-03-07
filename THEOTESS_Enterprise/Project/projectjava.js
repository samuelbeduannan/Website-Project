function show_Time() {
    'use strict';
    var today = new Date(),
        tdate = today.toLocaleDateString(),
        ttime = today.toLocaleTimeString();

    document.getElementById("foot").innerHTML = tdate + "<br />" + ttime;

}

show_Time();
