
function createDiv(id) {

    const now = new Date();
    const time = now.toLocaleTimeString();        // formatted time (HH:MM:SS)


    const container = document.getElementById('activity-log-container');

    const element = document.getElementById(id).innerText;

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-gray-100 rounded-xl p-2">
            <p>You have Completed The Task ${element} at ${time} </p>
        </div>
    `
    container.appendChild(div);
}



