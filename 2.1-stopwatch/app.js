let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", function() {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener("click", function() {
    timer = false;
});

resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById("hr").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
    document.getElementById("cnt").innerHTML = '00';
});

function stopWatch() {
    if(timer) {
        count++;
        if(count > 100) {
            second++;
            count = 0;
        } 
        
        if(second > 60) {
            minute++;
            second = 0;
        }
        
        if (minute > 60) {
            hour++;
            minute = 0;
        }
        
        if (hour > 24) {
            hour = 0;
        }

        // Jadikan String
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let cntString = count;

        if(hour < 10) {
            hrString = "0" + hrString;
        }

        if(minute < 10) {
            minString = "0" + minString;
        }

        if(second < 10) {
            secString = "0" + secString;
        }

        if(count < 10) {
            cntString = "0" + cntString;
        }

        document.getElementById("#hr").innerHTML = hrString;
        document.getElementById("#min").innerHTML = minString;
        document.getElementById("#sec").innerHTML = secString;
        document.getElementById("#cnt").innerHTML = cntString;
        setTimeout(stopWatch, 10);
    }
}