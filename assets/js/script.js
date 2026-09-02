/* =========================================================
   RAINBOW EVENTS By Sathish
   SERVICE DATA
========================================================= */

const services = [

    {
        number: '01',
        icon: '🎂',
        title: 'Birthday Decoration',
        description: 'Balloon decorations, themed setups, backdrops and name boards.',
        images: [
            'assets/images/birthday/1.jpeg',
            'assets/images/birthday/2.jpeg',
            'assets/images/birthday/3.jpeg',
            'assets/images/birthday/4.jpeg',
            'assets/images/birthday/5.jpeg',
            'assets/images/birthday/6.jpeg',
            'assets/images/birthday/7.jpeg'
        ]
    },

    {
        number: '02',
        icon: '💍',
        title: 'Wedding Decoration',
        description: 'Elegant wedding stages, floral decoration and venue styling.',
        images: [
            'assets/images/wedding/1.jpeg',
            'assets/images/wedding/2.jpeg',
            'assets/images/wedding/3.jpeg',
            'assets/images/wedding/4.jpeg',
            'assets/images/wedding/5.jpeg'
        ]
    },

    {
        number: '03',
        icon: '👶',
        title: 'Baby Shower Decoration',
        description: 'Pastel themes, balloon arches and customized baby shower setups.',
        images: [
            'assets/images/baby-shower/1.jpeg',
            'assets/images/baby-shower/2.jpeg',
            'assets/images/baby-shower/3.jpeg',
            'assets/images/baby-shower/4.jpeg',
            'assets/images/baby-shower/5.jpeg',
            'assets/images/baby-shower/6.jpeg',
            'assets/images/baby-shower/8.jpeg',
            'assets/images/baby-shower/9.jpeg'
        ]
    },

    {
        number: '04',
        icon: '❤️',
        title: 'Anniversary Decoration',
        description: 'Romantic decorations with balloons, lights and flowers.',
        images: [
            'assets/images/anniversary/1.jpeg',
            'assets/images/anniversary/2.jpeg',
            'assets/images/anniversary/3.jpeg',
            'assets/images/anniversary/4.jpeg'
        ]
    },

    {
        number: '05',
        icon: '🎁',
        title: 'Haldi',
        description: 'Traditional and colorful decoration for beautiful Haldi ceremonies.',
        images: [
            'assets/images/haldi/1.jpeg',
            'assets/images/haldi/2.jpeg',
            'assets/images/haldi/3.jpeg',
            'assets/images/haldi/4.jpeg'
        ]
    },

    {
        number: '06',
        icon: '🏢',
        title: 'Corporate Events',
        description: 'Professional decoration for office and corporate events.',
        images: [
            'assets/images/corporate/1.jpg',
            
        ]
    },

    {
        number: '07',
        icon: '🏠',
        title: 'House Warming',
        description: 'Traditional and modern decoration for new homes.',
        images: [
            'assets/images/house-warming/1.jpg',
            'assets/images/house-warming/2.jpg',
            'assets/images/house-warming/3.jpg'
        ]
    },

    {
        number: '08',
        icon: '✨',
        title: 'Naming Ceremony',
        description: 'Traditional and modern decoration for beautiful naming ceremonies.',
        images: [
            'assets/images/naming/1.jpeg',
            'assets/images/naming/2.jpeg',
            'assets/images/naming/3.jpeg',
            'assets/images/naming/4.jpeg',
            'assets/images/naming/5.jpeg',
            'assets/images/naming/6.jpeg',
            'assets/images/naming/7.jpeg',
            'assets/images/naming/8.jpeg'
        ]
    }

];


/* =========================================================
   CREATE SERVICE CARD
========================================================= */

function createServiceCard(service) {

    const imageHTML = service.images.map((image, index) => {

        return `
            <img
                src="${image}"
                alt="${service.title}"
                class="slide ${index === 0 ? 'active' : ''}"
            >
        `;

    }).join('');


    const controls = service.images.length > 1
        ? `
            <button
                type="button"
                class="slide-btn prev"
                aria-label="Previous image"
            >
                ❮
            </button>

            <button
                type="button"
                class="slide-btn next"
                aria-label="Next image"
            >
                ❯
            </button>

            <span class="slide-counter">
                1 / ${service.images.length}
            </span>
        `
        : '';


    return `
        <article class="card">

            <div class="image slideshow">

                ${imageHTML}

                ${controls}

            </div>


            <div class="content">

                <span class="number">
                    ${service.number}
                </span>

                <h3>
                    ${service.icon} ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

                <button
                    type="button"
                    class="book-service"
                    data-service="${service.title}"
                >
                    Book This Service →
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   LOAD SERVICES
========================================================= */

function loadServices() {

    const home =
        document.getElementById('serviceCards');


    if (home) {

        home.innerHTML =
            services
                .slice(0, 9)
                .map(createServiceCard)
                .join('');

    }


    const all =
        document.getElementById('allServices');


    if (all) {

        all.innerHTML =
            services
                .map(createServiceCard)
                .join('');

    }

}


/* =========================================================
   MANUAL SLIDESHOW
========================================================= */

function setupSlideshows() {

    const slideshows =
        document.querySelectorAll('.slideshow');


    slideshows.forEach(slideshow => {

        const slides =
            slideshow.querySelectorAll('.slide');

        const previousButton =
            slideshow.querySelector('.prev');

        const nextButton =
            slideshow.querySelector('.next');

        const counter =
            slideshow.querySelector('.slide-counter');


        if (slides.length <= 1) {
            return;
        }


        let currentSlide = 0;


        function showSlide(index) {

            currentSlide =
                (index + slides.length) % slides.length;


            slides.forEach((slide, i) => {

                slide.classList.toggle(
                    'active',
                    i === currentSlide
                );

            });


            if (counter) {

                counter.textContent =
                    `${currentSlide + 1} / ${slides.length}`;

            }

        }


        if (previousButton) {

            previousButton.addEventListener(
                'click',
                function(event) {

                    event.preventDefault();
                    event.stopPropagation();

                    showSlide(currentSlide - 1);

                }
            );

        }


        if (nextButton) {

            nextButton.addEventListener(
                'click',
                function(event) {

                    event.preventDefault();
                    event.stopPropagation();

                    showSlide(currentSlide + 1);

                }
            );

        }


        showSlide(0);

    });

}


/* =========================================================
   WHATSAPP BOOKING
========================================================= */

function book(service) {

    const message =
        `Hello Sathish,%0A%0A` +
        `I am interested in *${service}*.%0A` +
        `Please share the available decoration options and pricing.`;


    window.open(
        `https://wa.me/917795779992?text=${message}`,
        '_blank'
    );

}


window.book = book;


/* =========================================================
   BOOK SERVICE BUTTONS
========================================================= */

function setupBookingButtons() {

    document
        .querySelectorAll('.book-service')
        .forEach(button => {

            button.addEventListener(
                'click',
                function() {

                    const service =
                        this.dataset.service;

                    book(service);

                }
            );

        });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const menu =
        document.getElementById('menu');

    const nav =
        document.getElementById('navlinks');


    if (!menu || !nav) {
        return;
    }


    menu.addEventListener(
        'click',
        function() {

            nav.classList.toggle('show');

        }
    );

}


/* =========================================================
   GALLERY
   (automatically pulls every image from the services array)
========================================================= */

function setupGallery() {

    const grid =
        document.getElementById('galleryGrid');


    if (!grid) {
        return;
    }


    // Maps each service title to a gallery filter category
    const categoryMap = {
        'Birthday Decoration': 'birthday',
        'Wedding Decoration': 'wedding',
        'Baby Shower Decoration': 'baby',
        'Anniversary Decoration': 'anniversary',
        'Haldi Decoration': 'other',
        'Corporate Events': 'other',
        'House Warming': 'other',
        'Naming Ceremony': 'other'
    };


    // Pull every image from every service automatically
    const items =
        services.flatMap(service => {

            const category =
                categoryMap[service.title] || 'other';

            return service.images.map(image => [
                category,
                service.title,
                image
            ]);

        });


    grid.innerHTML =
        items.map(item => {

            return `
                <div class="item ${item[0]}">
                    <img src="${item[2]}" alt="${item[1]}">
                </div>
            `;

        }).join('');


    const filterButtons =
        document.querySelectorAll(
            '.filters button'
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            'click',
            function() {

                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });


                this.classList.add('active');


                const filter =
                    this.dataset.filter;


                document
                    .querySelectorAll('.gallery .item')
                    .forEach(item => {

                        if (
                            filter === 'all' ||
                            item.classList.contains(filter)
                        ) {

                            item.style.display = 'flex';

                        } else {

                            item.style.display = 'none';

                        }

                    });

            }
        );

    });

}


/* =========================================================
   BOOKING FORM
========================================================= */

function setupBookingForm() {

    const form =
        document.getElementById('bookingForm');


    if (!form) {
        return;
    }


    form.addEventListener(
        'submit',
        function(event) {

            event.preventDefault();


            function getValue(id) {

                const element =
                    document.getElementById(id);

                return element
                    ? element.value
                    : '';

            }


            const message =
                `🌈 *NEW EVENT BOOKING - RAINBOW EVENTS By Sathish*%0A%0A` +
                `👤 Name: ${getValue('name')}%0A` +
                `📞 Phone: ${getValue('phone')}%0A` +
                `🎉 Event: ${getValue('event')}%0A` +
                `📅 Date: ${getValue('date')}%0A` +
                `📍 Location: ${getValue('location')}%0A` +
                `📝 Requirements: ${getValue('requirements')}`;


            window.open(
                `https://wa.me/917795779992?text=${message}`,
                '_blank'
            );

        }
    );

}


/* =========================================================
   START WEBSITE
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    function() {

        loadServices();

        setupSlideshows();

        setupBookingButtons();

        setupMobileMenu();

        setupGallery();

        setupBookingForm();

    }
);
