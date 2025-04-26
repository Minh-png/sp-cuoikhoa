if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username must be at least 6 characters long.");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
  } else if (!password.match(lowerCaseLetter)) {
    alert("Password must contain at least one lowercase letter.");
  } else if (!password.match(upperCaseLetter)) {
    alert("Password must contain at least one uppercase letter.");
  } else if (!password.match(numbers)) {
    alert("Password must contain at least one number.");
  } else if (!email.includes("@")) {
    alert("Please enter a valid email address.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));
      let existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        alert("Email already exists. Please use a different email.");
        return;
      } else {
        let newUser = {
          username: username,
          email: email,
          password: password,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser)); // Store current user
        alert("Registration successful! You can now log in.");
        location.href = "./trangdangnhap.html"; // Redirect to login page
      }
    } else {
      let newUser = {
        username: username,
        email: email,
        password: password,
      };
      let users = [newUser];
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser)); // Store current user
      alert("Registration successful! You can now log in.");
      location.href = "./trangdangnhap.html"; // Redirect to login page
    }
  }
});
