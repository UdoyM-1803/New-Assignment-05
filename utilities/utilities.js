// Add a function to increase the number of Assigned Task

function increaseTask() {
    alert("Board Updated Successfully..!!!");

    const assignedTask = document.getElementById('task-count-2').innerText;
    const numAssignedTask = parseInt(assignedTask);
    const newNumOfTask = numAssignedTask-1;
    document.getElementById('task-count-2').innerText = newNumOfTask;

    const totalAssignedTask = document.getElementById('task-count-1').innerText;
    const numTotalAssignedTask = parseInt(totalAssignedTask);
    const newNumOfTotalTask = numTotalAssignedTask + 1;
    document.getElementById('task-count-1').innerText = newNumOfTotalTask;

    if (newNumOfTask === 0) {
        alert("Congrats!!! You have completed all the current task.");
    }

}

function DisableButton(id) {
    document.getElementById(id).disabled = true;
}
