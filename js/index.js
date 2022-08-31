const searchInput = document.querySelector('[type="search"]');
const searchIcon = document.querySelector('.fa-search');
const toggleBtn = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const profile = document.querySelector('.profile--cart');

const displaySearch = (event) => {
    const element = event.target.nextElementSibling;
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

searchIcon.addEventListener('click', displaySearch);

const toggleMenu = (event) => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');

        toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`
    } else {
        navbar.classList.add('active');
        toggleBtn.innerHTML = `<i class="fas fa-times"></i>`
    }
}

toggleBtn.addEventListener('click', toggleMenu);


const products = [
    {
        productID: '1',
        productTitle: 'Convetti Sheets',
        productCategory: 'Luxury Beddings',
        productPrice: 150.99,
        backgroundImage: "url('/images/image1.jpg')"
    },
    {
        productID: '2',
        productTitle: 'Boll and Branch Hemmed Sheets',
        productCategory: 'Luxury Beddings',
        productPrice: 140,
        backgroundImage: "url('/images/image2.jpg')"
    }, 
    {
        productID: '3',
        productTitle: 'Saatva Sateen',
        productCategory: 'Luxury Beddings',
        productPrice: 120,
        backgroundImage: "url('/images/image3.jpg')"  
    }, 
    {
        productID: '4',
        productTitle: 'Sijo Luxeweave',
        productCategory: 'Semi Luxury Beddings',
        productPrice: 100,
        backgroundImage: "url('/images/image4.jpg')"
    }, 
    {
        productID: '5',
        productTitle: 'Luxome',
        productCategory: 'Semi Luxury Beddings',
        productPrice: 100,
        backgroundImage: "url('/images/image5.jpg')"
    }, 
    {
        productID: '6',
        productTitle: 'Slumber Cloud Performance',
        productCategory: 'Pure Luxury Beddings',
        productPrice: 200,
        backgroundImage: "url('/images/image6.jpg')"
    }, 
    {
        productID: '7',
        productTitle: 'Pure Parima Ultra',
        productCategory: 'Pure Luxury Beddings',
        productPrice: 200,
        backgroundImage: "url('/images/image7.jpg')"
    }, 
    {
        productID: '8',
        productTitle: 'Brooklinen Heathered',
        productCategory: 'Pure Luxury beddings',
        productPrice: 240,
        backgroundImage: "url('/images/image8.jpg')"
    }
];

const productCatalog = document.querySelector('.product--catalog');

products.map((product) => {
    const { productID, productTitle, productCategory, productPrice, backgroundImage } = product;

    const imageCard = document.createElement('div');
    imageCard.classList.add('image');
    imageCard.style.backgroundImage = backgroundImage;
    imageCard.innerHTML = `

    <div class="product--info">
        <h2 class="product--title">${productTitle}</h2>
        <p class="product--category">${productCategory}</p>
    </div>
    <p class="price"><span>$</span>${productPrice}</p>
    
    `
    productCatalog.appendChild(imageCard);
})


// THE IMAGE CAROUSEL
const carouselBtnContainer = document.querySelector('.carousel--btns');
const leftBtn = carouselBtnContainer.querySelector('.fa-arrow-left');
const rightBtn = carouselBtnContainer.querySelector('.fa-arrow-right');
const slideContainer = document.querySelector('.product--carousel-images');
const imageSlides = slideContainer.querySelectorAll('.carousel--image');
let currentSlide = 0;

const reset = () => {
    imageSlides.forEach((imageSlide) => {
        imageSlide.style.display = 'none';
    })
}


const startSlide = () => {
    reset();
    
    imageSlides[currentSlide].style.display = 'flex';
}

startSlide();

const previous = () => {
    reset();

    imageSlides[currentSlide - 1].style.display = 'flex';
    currentSlide--;
}

const next = () => {
    reset();

    imageSlides[currentSlide + 1].style.display = 'flex';
    currentSlide++;
}

leftBtn.addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = imageSlides.length;
    }
    previous();
});
rightBtn.addEventListener('click', () => {
    if (currentSlide === imageSlides.length - 1) {
        currentSlide = 0;
    } 
    next();
})

// CLIENT CAROUSEL
const testimonialsContainer = document.querySelector('.testimonials--container');
const testimonialsLeftBtn = testimonialsContainer.querySelector('.icon-left');
const testimonialsRightBtn = testimonialsContainer.querySelector('.icon-right');
const clientSlides = document.querySelectorAll('.client');
let currentClientSlide = 0;


function resetClient() {
    clientSlides.forEach(clientSlide => {
        clientSlide.style.display = 'none';
    })
}
function startClientSlide() {
    resetClient();
    clientSlides[currentClientSlide].style.display = 'flex';
}

startClientSlide();

function previousSlide() {
    resetClient();

    clientSlides[currentClientSlide - 1].style.display = 'flex';
    currentClientSlide--;
}
function nextSlide() {
    resetClient();

    clientSlides[currentClientSlide + 1].style.display = 'flex';
    currentClientSlide++;
}

testimonialsLeftBtn.addEventListener('click', () => {
    if (currentClientSlide === 0) {
        currentClientSlide = clientSlides.length;
    }
    previousSlide();
});

testimonialsRightBtn.addEventListener('click', () => {
    if (currentClientSlide === clientSlides.length - 1) {
        currentClientSlide = 0;
    }
    nextSlide();
})
