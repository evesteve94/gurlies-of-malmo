const body = document.querySelector('body');
const button = document.getElementById('button');

button.addEventListener('click', function(){
    const secretMessage = document.createElement('p');
    secretMessage.textContent = 'Hejhejhallååååå';

    body.appendChild(secretMessage);
})