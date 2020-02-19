//DOM ELEMENTS

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

//Add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background Image
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('./img/night.jpg')";
    greeting.textContent = "Good  Evening";
    document.body.style.color = "white";
  }
}
//Run
showTime();
setBgGreet();
