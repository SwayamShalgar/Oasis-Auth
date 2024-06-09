document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const hashedPassword = btoa(password);
        
    localStorage.setItem(username, hashedPassword);
    alert('User registered successfully');
    showLoginSection();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === btoa(password)) {
        document.getElementById('user').textContent = username;
        document.getElementById('securedPage').classList.remove('hidden');
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('registerSection').classList.add('hidden');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('securedPage').classList.add('hidden');
    document.getElementById('registerSection').classList.remove('hidden');
    document.getElementById('loginSection').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    showLoginSection();
});

document.getElementById('showRegister').addEventListener('click', function(e) {
    e.preventDefault();
    showRegisterSection();
});

function showLoginSection() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('registerSection').classList.add('hidden');
}

function showRegisterSection() {
    document.getElementById('registerSection').classList.remove('hidden');
    document.getElementById('loginSection').classList.add('hidden');
}
