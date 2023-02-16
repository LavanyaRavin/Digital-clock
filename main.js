

function runClock() {

    var today = new Date();
    console.log(today);
    var hrs = today.getHours();
    // console.log(hrs);
    var mins = today.getMinutes();
    // console.log(mins);
    var secs = today.getSeconds();
    // console.log(secs);
    var txt = 'AM';



    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    hrs = hrs.toString();
    mins = mins.toString();
    secs = secs.toString();

    // clock.innerHTML = `${hrs} : ${mins} : ${secs} ${txt}`;

    if (hrs > 12) {
        // document.querySelectorAll('.t').innerHTML = 'PM'
        txt = 'PM'
    }
    else if (hrs < 12) {
        // document.querySelectorAll('.t').innerHTML = 'AM'
        txt = 'AM'
    }
    else if (hrs == 12 && mins >= 0 && secs >= 0) {
        // document.querySelectorAll('.t').innerHTML = 'PM'
        txt = 'PM'
    }

    console.log(hrs)
    console.log(mins)
    console.log(secs)
    console.log(txt)

    const h = document.querySelectorAll('.h');
    const m = document.querySelectorAll('.m');
    const s = document.querySelectorAll('.s');
    const t = document.querySelector('.t');

    h[0].innerHTML = hrs[0];
    h[1].innerHTML = hrs[1];

    m[0].innerHTML = mins[0];
    m[1].innerHTML = mins[1];

    s[0].innerHTML = secs[0];
    s[1].innerHTML = secs[1];

    t.innerHTML = txt;

}
runClock();
setInterval(runClock, 1000);