document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        document.getElementById('message').textContent = 'A validation email has been sent.';
        // Simulate email validation logic here
        setTimeout(() => {
            window.location.href = 'subscription.html';
        }, 2000);
    }
});
