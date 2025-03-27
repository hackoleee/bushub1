function findBus() {
    let stop = document.getElementById("stop").value;
    let time = document.getElementById("time").value;
    let busDetails = document.getElementById("busDetails");

    if (stop === "" || time === "") {
        busDetails.innerHTML = "<p style='color: red;'>Please enter stop and time.</p>";
        return;
    }

    // Example bus data
    let busInfo = `
        <p><strong>Bus Number:</strong> 102</p>
        <p><strong>Fare:</strong> $2.50</p>
        <p><strong>Arrival Time:</strong> ${time}</p>
    `;

    busDetails.innerHTML = busInfo;
}

function viewMap() {
    document.getElementById("map").innerHTML = "<p>Route map is currently unavailable.</p>";
}

function logout() {
    window.location.href = "login.html";
}
