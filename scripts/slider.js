const slideImage = document.querySelector("#slide")
const textImage = document.querySelector("#placeholder")

const slidesList =
    [
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/galileus.png", text: "Bicicletas Galileus" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/dropp.png", text: "Dropp" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/jc-coifas.png", text: "JC Coifas" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/kit-cia.png", text: "Kit&Cia" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/metaux.png", text: "Metaux" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/nova-super-forte.png", text: "Nova Super Forte" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/nn.png", text: "Plásticos NN" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/sans.png", text: "San's" },
        { src: "https://gustanator.github.io/obf-metalurgica/assets/logos/slider/wendy.png", text: "Wendy Bikes" }
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