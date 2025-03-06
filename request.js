document.addEventListener("DOMContentLoaded", function () {
    const requestTableBody = document.getElementById("requestTableBody");

    // Sample data
    const employeeRequests = [
        { name: "John Doe", type: "Leave", details: "Sick leave for 3 days" },
        { name: "Jane Smith", type: "Overtime", details: "Worked extra 5 hours" },
        { name: "Michael Lee", type: "Shift Change", details: "Swap with Alex" }
    ];

    // Function to populate table
    function loadRequests() {
        employeeRequests.forEach((request, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${request.name}</td>
                <td>${request.type}</td>
                <td>${request.details}</td>
                <td>
                    <button class="action-btn approve" onclick="approveRequest(${index})">Approve</button>
                    <button class="action-btn reject" onclick="rejectRequest(${index})">Reject</button>
                </td>
            `;

            requestTableBody.appendChild(row);
        });
    }

    loadRequests();
});

// Approve function
function approveRequest(index) {
    alert(`Request ${index + 1} approved.`);
}

// Reject function
function rejectRequest(index) {
    alert(`Request ${index + 1} rejected.`);
}