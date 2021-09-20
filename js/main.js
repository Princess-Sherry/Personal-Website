var previous = '';
var current = 'HOME';
var previousNav = '';
var currentNav = '[href="' + current + '"]';
var activePage = 'page--active';
var activeNavItem = 'navItem--active';

document.querySelector(currentNav).classList.add(activeNavItem);
document.querySelector('#' + current).classList.add(activePage);


var navItems = document.querySelectorAll('.main__header__navbar__item');

navItems.forEach(element => {
    element.onclick = function(event) {
        event.preventDefault();
        previous = current;
        current = event.target.getAttribute('href');
        previousNav = currentNav;
        currentNav = '[href="' + current + '"]';
        changePage();
        changeNavItem();
    }
});

function changePage() {
    var previousPage = document.querySelector('#' + previous);
    previousPage.classList.remove(activePage);
    var currentPage = document.querySelector('#' + current);
    currentPage.classList.add(activePage);
}

function changeNavItem() {
    document.querySelector(previousNav).classList.remove(activeNavItem);
    document.querySelector(currentNav).classList.add(activeNavItem);
}


