document.getElementById('clear-history-btn')
    .addEventListener('click', function() {
        const clearContainer = document.getElementById('activity-log-container');
        clearContainer.innerHTML = "";
})