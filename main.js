const sectionOne = document.querySelector('.section-2');
const sections = document.querySelectorAll('section');
const navi = document.querySelector('.header');
const options = {
    root: null, // equal to viewport
    threshold: .5, // default 0
    rootMargin: "0px"
};
const optionTwo = {
    root: document.querySelector('.section-2'),
    threshold: 0.5,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function
    (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        //console.log(entry.target);
        entry.target.classList.toggle('inverse');
    });
}, options);

const observerTwo = new IntersectionObserver(function(entries, observerTwo) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry);
        entry.target.classList.toggle('small');
    });
}, optionTwo);

observerTwo.observe(navi);

sections.forEach(section => {
    observer.observe(section);
});