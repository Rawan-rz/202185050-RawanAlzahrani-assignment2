let hour = new Date().getHours();

if (hour < 12) {
  alert("Good Morning!");
} else if (hour < 18) {
  alert("Good Afternoon!");
} else {
  alert("Good Evening!");
}

function toggleProjects() {
  let content = document.getElementById("projectsText");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}