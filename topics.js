let topics = document.querySelectorAll('.topics-item');
let categories = document.querySelectorAll('.dropdown-item-link');
let select = document.querySelector('.topic-select');

for (let category of categories) {
    category.onclick = function (evt) {
        evt.preventDefault();
        for (let topic of topics) {
            if (topic.dataset.tag !== category.dataset.tag && category.dataset.tag !== 'all') {
                topic.classList.add('hidden');
            } else {
                topic.classList.remove('hidden');
            }
        }
        select.textContent = category.textContent;        
    }
}

select.onclick = function (evt) {
    evt.preventDefault();
}
