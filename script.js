var currentDate = new Date();
var burfday = new Date("22 Mar 1995");

function getAge(dateString) {
  var age = currentDate.getFullYear() - burfday.getFullYear();
  var m = currentDate.getMonth() - burfday.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < burfday.getDate())){
    age--;
  }
  return age;
}

document.querySelector("#age").innerHTML = getAge(burfday);
