const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade .4s ease forwards .4s';
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}

navslide();

const kaszana = document.querySelector('#people').nodeValue;
console.log(kaszana)

/*
wartości z selektora przyporządkowywujemy wartości wartosciom w tablicy 

weight = []



tablica 1 z masą 
tablica 2 ze wzrostem 
bierzeym największą wartość 
korygujemy tę wartosć o wiek 
tworzymy tablice dwuwymiarową 
rzad wybieram z tej wiekszej z 2 wartosci 
kolumne na podstawie buta 
*/