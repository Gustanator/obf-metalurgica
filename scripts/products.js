const linhaDeProdutos = document.getElementById("linha-de-produtos")

let produtosBicicleta =
    [
        { src: "../assets/products/bicicletas/01.jpg", header: "OB-01B", text: 'Gancheira traseira lisa' },
        { src: "../assets/products/bicicletas/02.jpg", header: "OB-02B", text: 'Gancheira dianteira da cross' },
        { src: "../assets/products/bicicletas/03.jpg", header: "OB-03B", text: 'Gancheira do quadro do motor' },
        { src: "../assets/products/bicicletas/04.jpg", header: "OB-04B", text: 'Gancheira traseira cargueira' },
        { src: "../assets/products/bicicletas/05.jpg", header: "OB-05B", text: 'Gancheira traseira do freio a disco' },
        { src: "../assets/products/bicicletas/06.jpg", header: "OB-06B", text: 'Gancheira estriada traseira esquerda' },
        { src: "../assets/products/bicicletas/07.jpg", header: "OB-07B", text: 'Gancheira estriada traseira direita' },
        { src: "../assets/products/bicicletas/08.jpg", header: "OB-08B", text: 'Travessa central do descanso 22x45mm' },
        { src: "../assets/products/bicicletas/09.jpg", header: "OB-09B", text: 'Travessa superior do bagageiro 22x61mm' },
        { src: "../assets/products/bicicletas/10.jpg", header: "OB-010B", text: 'Travessa superior do bagageiro 21x72mm (com/sem furo)' },
        { src: "../assets/products/bicicletas/11.jpg", header: "OB-011B", text: 'Travessa do bagageiro sem furo 22x85mm' },
        { src: "../assets/products/bicicletas/13.jpg", header: "OB-013B", text: 'Gancheira dianteira do freio a disco' },
        { src: "../assets/products/bicicletas/14.jpg", header: "OB-014B", text: 'Travessa superior do bagageiro 25x60mm (com/sem furo)' },
        { src: "../assets/products/bicicletas/15.jpg", header: "OB-015B", text: 'Travessa 22x45mm com ângulo' },
        { src: "../assets/products/bicicletas/17.jpg", header: "OB-017B", text: 'Suporte inferior do bageiro (orelhão)' },
        { src: "../assets/products/bicicletas/18.jpg", header: "OB-018B", text: 'Suporte inferior do bageiro (orelhinha)' },
        { src: "../assets/products/bicicletas/19.jpg", header: "OB-019B", text: 'Travessa inferior do paralama' },
        { src: "../assets/products/bicicletas/20.jpg", header: "OB-020B", text: 'Travessa superior do paralama (70mm)' },
        { src: "../assets/products/bicicletas/21.jpg", header: "OB-021B", text: 'Abraçadeira numerada do celim' },
        { src: "../assets/products/bicicletas/22.jpg", header: "OB-022B", text: 'Suporte superior do bagageiro' },
        { src: "../assets/products/bicicletas/23.jpg", header: "OB-023B", text: 'Suporte do cobre corrente 30mm (com furo/obilongo)' },
        { src: "../assets/products/bicicletas/24.jpg", header: "OB-024B", text: 'Tragvessa superior do bagageiro 90x22mm' },
        { src: "../assets/products/bicicletas/25.jpg", header: "OB-025B", text: 'Suporte do cobre corrente 24mm (com furo/obilongo)' }
    ]

let produtosAutomovel =
    [
        { src: "../assets/products/autos/08.jpg", header: "OB-08A", text: 'Suporte do batente dianteiro da GM S-10/Blazer' },
        { src: "../assets/products/autos/09.jpg", header: "OB-09A", text: 'Suporte do batente dianteiro do Fiat Stilo' },
        { src: "../assets/products/autos/10.jpg", header: "OB-010A", text: 'Arruela da coifa amortecedor tras. do GM Corsa/Celta/Meriva/Tigra' },
        { src: "../assets/products/autos/11.jpg", header: "OB-011A", text: 'Tampa do óleo do VW Fusca/Kombi' },
        { src: "../assets/products/autos/12.jpg", header: "OB-012A", text: 'Abraçadeira central do Fiat Uno/Premio/Elba/ Fiorino após 1991' },
        { src: "../assets/products/autos/13.jpg", header: "OB-013A", text: 'Abraçadeira superior da ponta c/ parafuso para Fiat após 1991' },
        { src: "../assets/products/autos/14.jpg", header: "OB-014A", text: 'Abraçadeira infeiror da ponta c/ parafuso para Fiat após 1991' },
        { src: "../assets/products/autos/15.jpg", header: "OB-015A", text: 'Caneca do batente amortecedor do Ford Fusion' },
        { src: "../assets/products/autos/16.jpg", header: "OB-016A", text: 'Caneca do batente amortecedor do VW Up! (usinada)' },
        { src: "../assets/products/autos/17.jpg", header: "OB-017A", text: 'Abraçadeira da barra estabilizadora esquerda do VW Fox/Polo/Up!/Gol G5' },
        { src: "../assets/products/autos/18.jpg", header: "OB-018A", text: 'Abraçadeira da barra estabilizadora direita do VW Fox/Polo/Up!/Gol G5' }
    ]

let produtosEscapamento =
    [
        { src: "../assets/products/escapes/01.jpg", header: "OB-01A", text: 'Abraçadeira do escapamento 1.3/4"' },
        { src: "../assets/products/escapes/02.jpg", header: "OB-02A", text: 'Abraçadeira do escapamento 2"' },
        { src: "../assets/products/escapes/03.jpg", header: "OB-03A", text: 'Abraçadeira do escapamento 2.1/8"' },
        { src: "../assets/products/escapes/04.jpg", header: "OB-04A", text: 'Abraçadeira do escapamento 2.1/2"' },
        { src: "../assets/products/escapes/05.jpg", header: "OB-05A", text: 'Abraçadeira do escapamento 2.3/4"' }
    ]

function createList(array) {
    let result = ``
    for (const product in array) {
        result +=
            `<div class="linha-prods">
                    <h4 class="linha-h4">${array[product].header}</h4>
                    <img class="linha-img" src=${array[product].src} /><br>
                    <p class="linha-descricao">${array[product].text}</p>
            </div>`
    }

    linhaDeProdutos.innerHTML = result
}