document.addEventListener("DOMContentLoaded", async function () {
    const userToken = localStorage.getItem("userToken");
    const apiUrl = "https://your-api-endpoint.com/user-dashboard"; // Replace with your API

    if (!userToken) {
        alert("You need to log in first!");
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${userToken}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const userData = await response.json();

        updateDashboard(userData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

function updateDashboard(data) {
    // Update User's Name
    document.querySelector(".dashboard-container h1").innerText = `Welcome, ${data.name}!`;

    // Update Progress
    document.querySelector("#progressValue").innerText = `${data.progress}%`;
    document.querySelector("#progressBar").style.width = `${data.progress}%`;

    // Update Last Activities
    const activityList = document.querySelector("#lastActivities");
    activityList.innerHTML = "";
    data.lastActivities.forEach(activity => {
        let li = document.createElement("li");
        li.innerText = activity;
        activityList.appendChild(li);
    });

    // Update Schedule
    const scheduleList = document.querySelector("#schedule");
    scheduleList.innerHTML = "";
    data.schedule.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${item.time}:</strong> ${item.task}`;
        scheduleList.appendChild(li);
    });
}
