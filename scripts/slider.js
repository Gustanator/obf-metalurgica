const slideImage = document.querySelector("#slide")
const textImage = document.querySelector("#placeholder")

const slidesList =
    [
        { src: "./../assets/logos/slider/galileus.png", text: "Bicicletas Galileus" },
        { src: "./../assets/logos/slider/dropp.png", text: "Dropp" },
        { src: "./../assets/logos/slider/jc-coifas.png", text: "JC Coifas" },
        { src: "./../assets/logos/slider/kit-cia.png", text: "Kit&Cia" },
        { src: "./../assets/logos/slider/metaux.png", text: "Metaux" },
        { src: "./../assets/logos/slider/nova-super-forte.png", text: "Nova Super Forte" },
        { src: "./../assets/logos/slider/nn.png", text: "Plásticos NN" },
        { src: "./../assets/logos/slider/sans.png", text: "San's" },
        { src: "./../assets/logos/slider/wendy.png", text: "Wendy Bikes" }
    ]

// Init
let i = 0

slideImage.src = slidesList[i].src
textImage.textContent = `${slidesList[i].text}`

function passSlide(isReverse) {
    let maximum = slidesList.length - 1

    if (!isReverse) i++
    else i--
    
    if (i < 0) i = maximum 
    else if (i > maximum) i = 0

    slideImage.src = slidesList[i].src
    textImage.textContent = `${slidesList[i].text}`
}