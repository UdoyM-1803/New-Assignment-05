document.getElementById('swift-pay-btn')
    .addEventListener('click', function() {
        increaseTask();
        DisableButton('swift-pay-btn');
        createDiv('swift-pay-title');
})