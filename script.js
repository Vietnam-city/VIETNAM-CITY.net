const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btmlogin = document.querySelector('.btmLogin-popup');
const close = document.querySelector('.icon-close');
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});
btmlogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});
close.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
});
opup')
});

});