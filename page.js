function submitForm() {
    let projectName = document.getElementById('projectName').value;
    let moduleName = document.getElementById('moduleName').value;
    let teamLead = document.getElementById('teamLead').value;
    let teamMembers = [
        document.getElementById('teamMember1').value,
        document.getElementById('teamMember2').value,
        document.getElementById('teamMember3').value
    ].filter(member => member.trim() !== "");

    let documents = document.getElementById('documents').value;
    let startDate = document.getElementById('startDate').value;
    let deadline = document.getElementById('deadline').value;

    console.log("Project Name:", projectName);
    console.log("Module Name:", moduleName);
    console.log("Team Lead:", teamLead);
    console.log("Team Members:", teamMembers);
    console.log("Related Documents:", documents);
    console.log("Start Date:", startDate);
    console.log("Deadline:", deadline);

    alert("Form Submitted Successfully!");
}