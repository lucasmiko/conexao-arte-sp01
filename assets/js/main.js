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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
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
    longitudeLatitude: ""
}];

function createGallery(database, galleryEl) {
    
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

    const galleryEllipse = card.querySelector(".gallery-ellipse");

    galleryEllipse.addEventListener("click", () => {

        galleryEllipse.classList.toggle("active");

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

        removeActive(linksGallery)

        linkElement.classList.add("active")

    })
})

$(document).on("ready", function() {

    carouselGallery.forEach(element => {
        
        initSlick(element.id);

    })
    
});


const carouselGallery = document.querySelectorAll(".carousel-gallery")

carouselGallery.forEach(el => {

    console.log(el)
    createGallery(database, el)

})




