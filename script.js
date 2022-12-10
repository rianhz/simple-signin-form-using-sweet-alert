let form = document.getElementById('myForm');
let username = document.querySelector('.input-username');
let password = document.querySelector('.input-password');
let spanUsername = document.querySelector('.span-username');
let spanPassword = document.querySelector('.span-password');
let labelUser = document.querySelector('.label-username');
let labelPassword = document.querySelector('.label-password');
let show = document.querySelector('#showns');
let ready = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value == '') {
    spanUsername.style.opacity = '1';
    spanUsername.innerHTML = 'Fill username field!';
    username.style.borderBottom = '2px solid red';
  } else {
    spanUsername.innerHTML = '';
    username.style.borderBottom = '2px solid gray';
  }

  if (password.value == '') {
    spanPassword.style.opacity = '1';
    spanPassword.innerHTML = 'Fill password field!';
    password.style.borderBottom = '2px solid red';
  } else {
    spanPassword.innerHTML = '';
    password.style.borderBottom = '2px solid gray';
  }

  if (username.value !== '' && password.value !== '') {
    ready = true;
  }

  if (ready) {
    Swal.fire(`Hello ${username.value}`, 'You logged in', 'success');
  }
});

show.addEventListener('click', (e) => {
  e.preventDefault();
  let password = document.querySelector('.input-password');
  if (password.type === 'password') {
    password.type = 'text';
    show.classList.remove('fa-solid', 'fa-eye');
    show.classList.add('fa-sharp', 'fa-solid', 'fa-eye-slash');
  } else {
    password.type = 'password';
    show.classList.add('fa-solid', 'fa-eye');
  }
});
