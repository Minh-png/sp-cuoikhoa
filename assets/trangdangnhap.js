if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users || users.length === 0) {
    alert("No user found. Please register first.");
    return;
  }
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let existingUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (existingUser) {
    localStorage.setItem("currentUser", JSON.stringify(existingUser));
    alert("Login successful!");
    location.href = "./index.html"; // Redirect to index.html
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
