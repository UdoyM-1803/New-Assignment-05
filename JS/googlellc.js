document.getElementById('google-llc-btn')
    .addEventListener('click', function() {
        increaseTask();
        DisableButton('google-llc-btn');
        createDiv('google-llc-title');
})