
const conter = document.querySelector('.conter');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpop = document.querySelector('.loginbtn');
const icncls = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    conter.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    conter.classList.remove('active');
});

btnpop.addEventListener('click', ()=> {
    conter.classList.add('active2');
});

icncls.addEventListener('click', ()=> {
    conter.classList.remove('active2');
});
