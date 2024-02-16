// welcome parallax
const tl = gsap.timeline({
    scrollTrigger: {
        target: "#parallax-trigger-1",
        start: "top 10%",
        stop: "bottom top",
        scrub: true
    }
})

tl.to("#parallax-1", { y: 450 }, 0)

// Carousel 
const prev = document.getElementById('about-prev-btn');
const next = document.getElementById('about-next-btn');
const list = document.getElementById('about-item-list');

const carouselImages = document.getElementsByClassName('about-item');
const itemWidth = 200;
const padding = 10;

prev.addEventListener('click', () => {
    list.scrollLeft -= itemWidth + padding;
});

next.addEventListener('click', () => {
    list.scrollLeft += itemWidth + padding;
});

list.addEventListener('scroll', (_ev) => {
    const scroll = list.scrollLeft;
    const idx = Math.floor(scroll / (itemWidth + 2 * padding));
    console.log(idx);

    for (let i = 0; i < carouselImages.length; ++i) {
        if (i == idx) {
            carouselImages[selectedImageIdx].classList.add('about-item-selected');
        } else {
            carouselImages[selectedImageIdx].classList.remove('about-item-selected');
        }
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const targetOffsetTop = targetSection.offsetTop - 70;

        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a.to-top').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


//Road map parallax

const composeTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#roadmap0",
        start: "center center",
        stop: '+=0',
        scrub: 1,
        pin: true,
        toggleActions: "play pause reverse reset",
    }
});

const tl0 = gsap.timeline({
    scrollTrigger: {
        target: "#roadmap0",
        start: "top bottom",
        stop: "bottom top",
        pin: true,
        scrub: true
    }
})

tl.to("#roadmap1", { y: -350 }, 0)
tl.to("#roadmap2", { y: -750 }, 0)

