var previous = '';
var current = 'HOME';
var active = 'page--active';

document.querySelector('#' + current).classList.add(active);

var navItems = document.querySelectorAll('.main__header__navbar__item');

navItems.forEach(element => {
    element.onclick = function(event) {
        event.preventDefault();
        previous = current;
        current = event.target.getAttribute('href');
        changePage();
    }
});

function changePage() {
    var previousPage = document.querySelector('#' + previous);
    previousPage.classList.remove(active);
    var currentPage = document.querySelector('#' + current);
    currentPage.classList.add(active);
}

