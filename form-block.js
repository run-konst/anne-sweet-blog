let message = document.querySelector('.form-message');
let buttom = document.querySelector('.submit-btn');
let counter = document.querySelector('.counter');

message.oninput = function () {
    
    counter.textContent = message.value.length;

    if (message.value.length < 10 || message.value.length > 200) {
        buttom.disabled = true;
        message.classList.add('message-error');
        counter.classList.add('message-error');
    } else {
        buttom.disabled = false;
        message.classList.remove('message-error');
        counter.classList.remove('message-error');
    }
}