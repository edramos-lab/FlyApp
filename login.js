function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Check if username and password are correct
	if (username === "default" && password === "default") {
		// Redirect to another web page
		window.location.href = "nextpage.html";//"https://example.com/dashboard";
	} else {
		alert("Invalid username or password. Please try again.");
	}
}
