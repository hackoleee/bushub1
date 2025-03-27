document.addEventListener("DOMContentLoaded", function() {
    loadBusStatus();
});

function loadBusStatus() {
    let busList = [
        { number: "102", status: "On Time" },
        { number: "105", status: "Delayed" },
        { number: "110", status: "Cancelled" }
    ];

    let table = document.getElementById("busStatusTable");
    table.innerHTML = "";

    busList.forEach(bus => {
        let row = `<tr>
            <td>${bus.number}</td>
            <td>
                <select onchange="updateStatus('${bus.number}', this.value)">
                    <option value="On Time" ${bus.status === "On Time" ? "selected" : ""}>On Time</option>
                    <option value="Delayed" ${bus.status === "Delayed" ? "selected" : ""}>Delayed</option>
                    <option value="Cancelled" ${bus.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
                </select>
            </td>
        </tr>`;
        table.innerHTML += row;
    });
}

function updateStatus(busNumber, status) {
    alert(`Bus ${busNumber} status updated to ${status}`);
}

function updateFare() {
    let busNumber = document.getElementById("busNumber").value;
    let fare = document.getElementById("fare").value;

    if (fare === "" || fare < 0) {
        alert("Please enter a valid fare.");
        return;
    }

    alert(`Fare for Bus ${busNumber} updated to $${fare}`);
}

function logout() {
    window.location.href = "login.html";
}
