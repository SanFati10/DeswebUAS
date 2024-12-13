// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 3000);
});
// Ambil semua carousel container
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(container => {
    const carousel = container.querySelector('.carousel');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    // Tombol Next
    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Tombol Prev
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
});
const carousels2 = document.querySelectorAll('.carousel3-container');

carousels2.forEach(container => {
    const carousel = container.querySelector('.carousel2');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    // Tombol Next
    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Tombol Prev
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
});
// Script untuk mendeteksi scroll dan menambahkan class 'scrolled'
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {  // Menambahkan class jika scroll lebih dari 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function filterByGenre(genre) {
    const movies = document.querySelectorAll('.movie');
    movies.forEach(movie => {
        if (genre === 'all' || movie.dataset.genre.includes(genre)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
}
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.getAttribute('data-filter');
        filterByGenre(genre);
    });
});

function filterByGenre(genre) {
    const movies = document.querySelectorAll('.movie');
    movies.forEach(movie => {
        if (genre === 'all' || movie.dataset.genre.includes(genre)) {
            movie.classList.remove('hidden');
        } else {
            movie.classList.add('hidden');
        }
    });
}

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.getAttribute('data-filter');
        filterByGenre(genre);
    });
});
