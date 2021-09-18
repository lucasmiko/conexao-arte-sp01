//Padrão camelCase
//Manipulação do DOM -> Document Object Model

const menuHotDog = document.querySelector("#menu-hotdog")
const body = document.querySelector("body")

menuHotDog.addEventListener("click", (e) => {
    
    e.preventDefault()
    
    //body.classList.add("open")
    body.classList.toggle("open")
})

const database = [{
    name: "Museu de Arte de São Paulo",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "masp.jpg",
    description: "",
    longitudeLatitude: "-23.561433653468562, -46.655377646638634",
    category: 1
}, {
    name: "Parque do Ibirapuera",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "ibirapuera.jpg",
    description: "",
    longitudeLatitude: "-23.58735656192446, -46.657653546707465",
    category: 3
}, {
    name: "Avenida Paulista",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "avenida-paulista.jpg",
    description: "",
    longitudeLatitude: "-23.5620728875411, -46.65588190209725",
    category: 3
}, {
    name: "Mercado Municipal",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "mercado-municipal.jpg",
    description: "",
    longitudeLatitude: "-23.541543580267145, -46.62871008548092",
    category: 5
}, {
    name: "Aquário de São Paulo",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "aquario-de-sao-paulo.jpg",
    description: "",
    longitudeLatitude: "-23.59332876464575, -46.613427960337354",
    category: 3
}, {
    name: "Teatro Municipal ",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "teatro-municipal.jpg",
    description: "",
    longitudeLatitude: "-23.54796272026829, -46.62730125371673",
    category: 3
}, {
    name: "Edificio Itália ",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "edificio-italia.jpg",
    description: "",
    longitudeLatitude: "-23.545336544027496, -46.642834085480835",
    category: 3
}, {
    name: "Museu da Língua Portuguesa",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "museu-da-lingua-portuguesa.jpg",
    description: "",
    longitudeLatitude: "-23.535046775589816, -46.633814285481016",
    category: 1
}, {
    name: "Museu do Futebol",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "museu-do-futebol.jpg",
    description: "",
    longitudeLatitude: "-23.547524782395197, -46.66435319712889",
    category: 1
}, {
    name: "Restaurante Président - Chef Érick Jacquin",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "president.jpg",
    description: "",
    longitudeLatitude: "-23.56247879560354, -46.66925848178786",
    category: 5
}, {
    name: "Rua 25 de Março",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "25-de-marco.jpg",
    description: "",
    longitudeLatitude: "-23.543578459486387, -46.63252134022069",
    category: 3
} , {
    name: "Skye Restaurante & Bar",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "skye-restaurante.jpg",
    description: "",
    longitudeLatitude: "-23.581843392939092, -46.66706507018299",
    category: 5
}, {
    name: "Sala São Paulo",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "sala-sao-paulo.jpg",
    description: "",
    longitudeLatitude: "-23.534026828808535, -46.638963739458724",
    category: 3
}, {
    name: "Terraço Itália",
    site: "",
    address: "",
    city: "São Paulo",
    state: "SP",
    cep: "",
    urlImage: "",
    imageName: "terraco-italia.jpg",
    description: "",
    longitudeLatitude: "-23.545345144039093, -46.643309748690044",
    category: 5
}];

function createGallery(database, galleryEl, filter = 0) {
    
    if (Number(filter) > 0) {

        database = database.filter((item) => Number(item.category) === Number(filter))
    }

    database.forEach(location => {

        createBlock(galleryEl, location)

    })

    
}

function createBlock(galleryElement, location) {
    
    // Criar a div com  classe card automaticamente
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
    
                    <div class="gallery-picture">
                        <img src="assets/images/card-image/${location.imageName}" alt="${location.name}">
                        <div class="gallery-ellipse">
                            <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09264C0 3.56076 3.509 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.0752C16.0805 1.19183 18.502 0 21.025 0C25.491 0 29 3.56076 29 8.09264C29 13.6545 24.07 18.1864 16.6025 25.0725L14.5 27Z" fill="#AFAFAF"/>
                                </svg>
                                
                        </div>
                    </div>

                    <h2>${location.name}</h2>

                    <div class="card-location">
                        <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.57714 0 0 3.5995 0 8.05C0 14.0875 8 23 8 23C8 23 16 14.0875 16 8.05C16 3.5995 12.4229 0 8 0ZM8 10.925C6.42286 10.925 5.14286 9.637 5.14286 8.05C5.14286 6.463 6.42286 5.175 8 5.175C9.57714 5.175 10.8571 6.463 10.8571 8.05C10.8571 9.637 9.57714 10.925 8 10.925Z" fill="#AFAFAF"/>
                        </svg>
                        <h3>${location.city} - ${location.state}</h3>
                    </div>
    `

    galleryElement.appendChild(card);

    setTimeout(() => {
        card.classList.add("show")

    }, 200)

    const galleryEllipse = card.querySelector(".gallery-ellipse");

    galleryEllipse.addEventListener("click", () => {

        galleryEllipse.classList.toggle("active");

    })

    card.querySelector("h2").addEventListener("click", (event) => {
        //window.open(`https://www.google.com/maps/search/?api=1&query=${location.longitudeLatitude}`, "_blank")
        window.open(`https://www.google.com/maps/search/?api=1&query=${String(location.name).replaceAll(" ", "+")},${location.longitudeLatitude}`, "_blank")
    })

}

function initSlick(id) {

    $(`#${id}`).slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        variableWidth: true,
        swipeToSlide: true,
        touchThreshold: 100,
        appendArrows: `#${id}`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

}

function removeActive(element) {

    element.forEach(el => {
        if (el.classList.contains("active")){
            el.classList.remove("active")
        }
    })

}

const linksGallery = document.querySelectorAll(".links-slider a")

linksGallery.forEach(linkElement => {

    linkElement.addEventListener("click", event => {

        event.preventDefault()

        const container = linkElement.closest('.carousel-container')

        const currentCarousel = container.querySelector('.carousel-gallery')

        removeActive(linksGallery)

        linkElement.classList.add("active")

        $(currentCarousel).slick("unslick")

        currentCarousel.innerHTML = ""

        createGallery(database, currentCarousel, linkElement.dataset.category)

        initSlick(currentCarousel.id)

    })
})

$(document).on("ready", function() {

    carouselGallery.forEach(element => {
        
        initSlick(element.id);

    })
    
});


const carouselGallery = document.querySelectorAll(".carousel-gallery")

carouselGallery.forEach(el => {

    createGallery(database, el)

})

const randomNumber = () => {

    return parseInt(Math.random() * (9 - 0) + 0)

}

const fullBanner = document.querySelector(".full-banner")

const setBackground = () => {

    fullBanner.style.background = `url('assets/images/background/${randomNumber()}.jpg') no-repeat`

}

setBackground()

setInterval(setBackground, 6000)




