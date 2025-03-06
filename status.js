document.addEventListener("DOMContentLoaded", function () {
    const employeeTableBody = document.getElementById("employeeTableBody");

    // Sample employees with statuses
    const employees = [
        { name: "John Doe", status: "Active" },
        { name: "Jane Smith", status: "On Leave" },
        { name: "Michael Lee", status: "Inactive" }
    ];

    // Function to generate status class
    function getStatusClass(status) {
        if (status === "Active") return "active";
        if (status === "On Leave") return "on-leave";
        return "inactive";
    }

    // Function to populate table
    function loadEmployees() {
        employees.forEach((employee, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${employee.name}</td>
                <td class="status ${getStatusClass(employee.status)}" id="status-${index}">
                    ${employee.status}
                </td>
                <td>
                    <select onchange="updateStatus(${index}, this.value)">
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </td>
            `;

            employeeTableBody.appendChild(row);
        });
    }

    loadEmployees();
});

// Function to update employee status
function updateStatus(index, newStatus) {
    const statusCell = document.getElementById(`status-${index}`);
    statusCell.textContent = newStatus;
    statusCell.className = `status ${getStatusClass(newStatus)}`;
}

// Function to get the correct CSS class
function getStatusClass(status) {
    if (status === "Active") return "active";
    if (status === "On Leave") return "on-leave";
    return "inactive";
}