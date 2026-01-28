function loginUser() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // ✅ Change credentials here
    if (user === "19141010809" && pass === "Agardih@1949") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid login credentials";
    }
    return false;
}

// Protect dashboard
function checkLogin() {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// Logout
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

