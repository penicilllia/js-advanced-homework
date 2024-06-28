'use strict'

const page = {
    buttons: document.querySelector('.buttons'),
    taps: document.querySelector('.taps')
}

console.log(typeof page.taps.innerHTML);
console.log(page.buttons);

page.buttons.addEventListener('click', event => {
    const previousButton = [...page.buttons.children].find(el => el.innerText === 'Кнопка нажата');
    if (previousButton) {
        previousButton.innerHTML = 'Нажми на меня';
        previousButton.classList.remove('tapped');
    }
    event.target.innerText = 'Кнопка нажата';
    event.target.classList.add('tapped');
    page.taps.innerHTML = Number(page.taps.innerHTML) + 1;
})
