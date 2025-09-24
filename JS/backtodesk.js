document.getElementById('desk-back-btn')
    .addEventListener('click', function() {
        document.getElementById('main-desk').classList.remove('hidden');
        document.getElementById('nav-bar-end').classList.remove('hidden');
        document.getElementById('desk-back-btn').classList.add('hidden');
        document.getElementById('faq-section').classList.add('hidden');
})