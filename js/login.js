document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('button click');
    const emailInput = document.getElementById('user-Email');
    const passwordInput = document.getElementById('user-Pass');
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email == 'sajib@gmail.com' && password == 123) {
        window.location.href = 'bank.html';
    }
    else {
        alert('Inavalid Username & Password');
    }
});