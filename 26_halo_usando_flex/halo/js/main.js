const moreOptions = document.querySelector('#bmore');
const bShowMobileLinks = document.querySelector('#bmenu');
const mobileMenu = document.querySelector('.links');
const moreMenu = document.querySelector('.more .menu');

bShowMobileLinks.addEventListener('click', (e) => {
    e.preventDefault();
mobileMenu.classList.toggle('show');
})

moreOptions.addEventListener('click', (e) => {
    e.preventDefault();
moreMenu.classList.toggle('show');
});

// Videos

const videos = [
    {
        id:"PyMlV5_HRWk",
    },
     {
        id:"XCbMVbeKlCg",
    },
     {
        id:"Fmdb-KmlzD8",
    },
     {
        id:"l0thvD1rMbQ",
    },
     {
        id:"nXDK86lQhto",
    },  
];
const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');

const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
let current = 0;

bNext.addEventListener('click', (e) => {
    current = current + 1 <= videos.length ? current + 1: current;

    renderCurrentVideo(videos[current].id);

});

bPrev.addEventListener('click', (e) => {
    current = current - 1 >= 0 ? current - 1: current;
        renderCurrentVideo(videos[current].id);

});

renderCurrentVideo(videos[current].id);

function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="🔥  Sitio Web con HTML y CSS de Halo usando Flex, dark mode y responsive design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`; 
};



