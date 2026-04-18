 

// Dark mode toggle
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};


// Save user name
function saveName() {
  const name = document.getElementById("nameInput").value;

  if (name === "") {
    alert("Enter your name");
    return;
  }

  localStorage.setItem("username", name);
  document.getElementById("welcome").innerText = "Welcome " + name;

  // hide input after saving
  document.getElementById("nameInput").style.display = "none";
  document.querySelector(".name-box button").style.display = "none";
}


// Filter projects
function filterProjects(type) {
  const projects = document.querySelectorAll(".repo");

  projects.forEach(p => {
    if (type === "all" || p.dataset.type === type) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}


// Show / hide projects
function toggleProjects(btn) {
  const section = document.querySelector(".grid");

  if (section.style.display === "none") {
    section.style.display = "grid";
    btn.innerText = "Hide Projects";
  } else {
    section.style.display = "none";
    btn.innerText = "Show Projects";
  }
}


// Sort projects by date
function sortProjects() {
  const container = document.querySelector(".grid");
  const projects = Array.from(container.children);

  projects.sort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return dateB - dateA;
  });

  container.innerHTML = "";
  projects.forEach(p => container.appendChild(p));
}


// Contact form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Fill all fields");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email");
    return false;
  }

  alert("Message sent");
  return false;
}


// Login simulation
function login() {
  localStorage.setItem("logged", "true");
  updateStatus();
}

function logout() {
  localStorage.removeItem("logged");
  updateStatus();
}

function updateStatus() {
  const status = document.getElementById("status");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (localStorage.getItem("logged") === "true") {
    status.innerText = "Logged in";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    status.innerText = "Not logged in";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
}


// Timer
let seconds = 0;

setInterval(() => {
  seconds++;
  document.getElementById("timer").innerText =
    `You spent ${seconds} seconds`;
}, 1000);


// Weather API
async function getWeather() {
  const weather = document.getElementById("weather-text");

  weather.innerText = "Loading...";

  try {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=26.43&longitude=50.10&current_weather=true");
    const data = await res.json();

    const temp = data.current_weather.temperature;
    weather.innerText = `${temp}°C`;

  } catch {
    weather.innerText = "Error";
  }
}


// Quote API
async function getQuote() {
  const quote = document.getElementById("quote-text");

  quote.innerText = "Loading...";

  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();

    quote.innerText = `"${data.quote}" — ${data.author}`;

  } catch {
    quote.innerText = "Error";
  }
}


// Random image API
function getImage() {
  const img = document.getElementById("random-img");
  img.src = "https://picsum.photos/300/200?random=" + Math.random();
}


// Page load setup
window.onload = function () {

  // load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // restore login state
  updateStatus();

  // load APIs
  getWeather();
  getQuote();
  getImage();

  // restore saved name
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("welcome").innerText = "Welcome " + savedName;

    document.getElementById("nameInput").style.display = "none";
    document.querySelector(".name-box button").style.display = "none";
  }

  // greeting message
  const greeting = document.getElementById("greeting");
  if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) {
      greeting.innerText = "Good Morning";
    } else if (hour < 18) {
      greeting.innerText = "Good Afternoon";
    } else {
      greeting.innerText = "Good Evening";
    }
  }
};