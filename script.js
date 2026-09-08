const maintenanceForm = document.getElementById("maintenanceForm");
const reportsList = document.getElementById("reportsList");

maintenanceForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const roomNumber = document.getElementById("roomNumber").value;
    const issueType = document.getElementById("issueType").value;
    const description = document.getElementById("description").value;

    const report = document.createElement("div");

    report.classList.add("report");

    report.innerHTML = `
        <h3>${issueType} Issue</h3>
        <p><strong>Student:</strong> ${studentName}</p>
        <p><strong>Room:</strong> ${roomNumber}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Status:</strong> <span>Pending</span></p>
        <hr>
    `;

    if (reportsList.innerHTML.includes("No reports submitted yet.")) {
        reportsList.innerHTML = "";
    }

    reportsList.appendChild(report);

    maintenanceForm.reset();

    alert("Your maintenance report has been submitted successfully!");
});
