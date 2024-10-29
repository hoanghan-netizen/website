document.querySelector('navbar ul li:nth-child(3) a').addEventListener('click',function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('closeLoginForm').addEventListener('click',function() {
    document.getElementById('loginForm').style.display = 'none';
});

window.addEventListener('click', function(event) {
        var form = document.getElementById('loginForm');
        if(event.target == form) {
            form.style.display = 'none';
        }
    });