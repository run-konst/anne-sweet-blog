let like = document.querySelector('.like');
let likeCounter = document.querySelector('.likes-counter');

like.onclick = function () {
    if (like.classList.contains('added')) {
        likeCounter.textContent--;
    } else {
        likeCounter.textContent++;
    }
    like.classList.toggle('added');
    likeCounter.classList.toggle('like-bold');
}
