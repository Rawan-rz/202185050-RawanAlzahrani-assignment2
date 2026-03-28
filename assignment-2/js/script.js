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

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return false;
  } else {
    alert("Message sent successfully!");
  }
}