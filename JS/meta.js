document.getElementById('meta-btn')
    .addEventListener('click', function() {
        increaseTask();
        DisableButton('meta-btn');
        createDiv('meta-title');
})