document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (email === 'kaamisinoy@gmail.com' && password === 'sinoy765') {
        // Redirect to main page if credentials are correct
        window.location.href = 'main.html';
    } else {
        alert('Invalid email or password');
    }
});