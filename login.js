// Login Form Elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');

// Login Button Click Handler
loginButton.addEventListener('click', () => {
  sendLoginRequest(usernameInput.value, passwordInput.value);
});

// Function to Send Login Request
function sendLoginRequest(username, password) {
  // TODO: Implement function to send login request to server
  console.log(`Sending login request for username ${username} and password ${password}`);
}
