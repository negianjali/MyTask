document.addEventListener("DOMContentLoaded", () => {
    console.log("Task Management UI Loaded");

    // Sidebar toggle for mobile view
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰ Menu";
    toggleBtn.classList.add("toggle-menu");
    
    // Add toggle button only for small screens
    if (window.innerWidth <= 600) {
        document.body.insertBefore(toggleBtn, sidebar);
    }

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // View Details button functionality
    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", (event) => {
            const taskTitle = event.target.closest(".task").querySelector("h3").innerText;
            alert(`Showing details for: ${taskTitle}`);
        });
    });

    // Logout Confirmation
    const logoutBtn = document.querySelector(".logout");
    logoutBtn.addEventListener("click", () => {
        const confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            alert("Logged out successfully!");
            // Here, you can add code to redirect the user to the login page.
        }
    });
});