// Dfine variable to hold time value
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define variable to hold display value


// Create a function
function stopWatch(){

    seconds++;
    // Logic to detmine increment
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

       if(minutes / 60 === 1){
          minutes = 0;
          hours++;
       }
    }

    // Display updated value
    document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds;
}

window.setInterval(stopWatch, 1000)