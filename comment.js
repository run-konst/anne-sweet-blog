let commentForm = document.querySelector('.comment-form');
let commentText = document.querySelector('.comment-form-textarea');
let commentList = document.querySelector('.comment-list');
let commentAuthor = document.querySelector('.comment-form-name');
let error = document.querySelector('.comment-error');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();    

    if (commentText.value.length < 10 || commentText.value.length > 200) {
        commentText.classList.add('message-error');
        error.classList.remove('visually-hidden');
    } else {
        let newComment = document.createElement('p');
        newComment.classList.add('comment-text');
        newComment.textContent = commentText.value;
        commentText.value = '';
    
        let newAuthor = document.createElement('div');
        newAuthor.classList.add('comment-author');
    
        let newAuthorName = document.createElement('span');
        newAuthorName.classList.add('comment-author-name');
        newAuthorName.textContent = commentAuthor.value;
        commentAuthor.value = '';
    
        let newAuthorAvatar = document.createElement('img');
        newAuthorAvatar.classList.add('comment-author-avatar');
        newAuthorAvatar.src = 'img/unknown-raccoon.svg';
        
        commentList.prepend(newComment);
        commentList.prepend(newAuthor);
        newAuthor.append(newAuthorAvatar);
        newAuthor.append(newAuthorName);
    }
}

commentText.onfocus = function () {
    commentText.classList.remove('message-error');
    error.classList.add('visually-hidden');
}