document.getElementById("userBtn").addEventListener("click", function() {
    document.getElementById("userLogin").classList.remove("hidden");
    document.getElementById("adminLogin").classList.add("hidden");
    this.classList.add("active");
    document.getElementById("adminBtn").classList.remove("active");
});

document.getElementById("adminBtn").addEventListener("click", function() {
    document.getElementById("adminLogin").classList.remove("hidden");
    document.getElementById("userLogin").classList.add("hidden");
    this.classList.add("active");
    document.getElementById("userBtn").classList.remove("active");
});

document.getElementById("userLogin").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;
    if (email === "user@example.com" && password === "user123") {
        alert("User Login Successful!");
    } else {
        alert("Invalid User Credentials!");
    }
});

document.getElementById("adminLogin").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;
    if (email === "admin@example.com" && password === "admin123") {
        alert("Admin Login Successful!");
    } else {
        alert("Invalid Admin Credentials!");
    }
});
