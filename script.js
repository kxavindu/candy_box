
document.addEventListener("DOMContentLoaded", function() {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down → hide navbar
      navbar.style.top = "-80px"; // adjust based on navbar height
    } else {
      // Scrolling up → show navbar
      navbar.style.top = "0";
    }

    prevScrollPos = currentScrollPos;
  };
});



document.addEventListener("DOMContentLoaded", function() {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greetingHTML = "";

   if (hour >= 5 && hour < 12) {
    greetingHTML = `Good Morning ! <img src="web_images/morning.gif" width="24" height="24" style="vertical-align:middle;">`;
  } else if (hour >= 12 && hour < 16) {
    greetingHTML = `Good Afternoon ! <img src="web_images/afternoon.gif" width="24" height="24" style="vertical-align:middle;">`;
  } else if (hour >= 16 && hour < 19) {
    greetingHTML = `Good Evening ! <img src="web_images/evening.gif" width="24" height="24" style="vertical-align:middle;">`;
  } else {
    greetingHTML = `Good Night !<img src="web_images/night.gif" width="24" height="24" style="vertical-align:middle;">`;
  }

  greetingEl.innerHTML = greetingHTML;
});











