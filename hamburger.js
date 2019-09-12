const hamburger = document.querySelector('.hamburger');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

hamburger.addEventListener('click', handleClick);