
/***************** login page ********************/

document.getElementById('loginId').addEventListener('click', function () {
    const userEmail = document.getElementById('user-EmailId').value;
    //const userEmailValue = userEmail.value;


    const userPassword = document.getElementById('user-PasswordId').value;
    //console.log(userPassword);

    if (userEmail == 'mesu.s.ss@gmail.com' && userPassword == 'mesu') {
        console.log('correct');
        window.location.href = 'banking.html';

    } else {
        alert('Invalid Username or Password !')
    }



});


