const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -170px 0px"
};
const appearonScroll = new IntersectionObserver(function(entries,appearonScroll){
    entries.forEach(entry => {
        //If false 
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearonScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearonScroll.observe(fader);
});

sliders.forEach(slider => {
    appearonScroll.observe(slider);
});