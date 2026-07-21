const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);



sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

const counters = [

    { id: "storiesCount", value: 78 },

    { id: "poemsCount", value: 24 },

    { id: "writersCount", value: 150 },

    { id: "eventsCount", value: 18 }

];

counters.forEach(counter => {

    let current = 0;

    const element = document.getElementById(counter.id);

    if (!element) return;

    const interval = setInterval(() => {

        current++;

        element.textContent = current;

        if (current >= counter.value) {

            clearInterval(interval);

        }

    }, 15);

}); 