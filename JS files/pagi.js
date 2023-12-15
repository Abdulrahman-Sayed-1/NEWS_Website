document.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('readMoreBtn')) {
        const textContainer = clickedElement.previousElementSibling;
        const moreText = textContainer.querySelector('.moreText');

        moreText.classList.toggle('show-more');

        if (clickedElement.innerText === 'Read More') {
            clickedElement.innerText = 'Read Less';
        } else {
            clickedElement.innerText = 'Read More';
        }
    }
});

