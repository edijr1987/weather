// Chave para chamada de uma API
const key = "daa8c000ceda58d7e32fbdf77c5f9d37"

// função para colocar os dados na tela principal...

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = `${dados.name}, ${dados.sys.country}`
    document.querySelector(".temp-max").innerHTML = 'Temperatura máx: ' + Math.floor(dados.main.temp_max) + " °C"
    document.querySelector(".temp-min").innerHTML = 'Temperatura mín: ' + Math.floor(dados.main.temp_min) + " °C"
    document.querySelector(".vento").innerHTML = 'Velocidade do vento: ' + Math.floor(dados.wind.speed) + 'km/h'
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = 'Humidade relativa do ar: ' + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    console.log(dados)
}

// função para obter, através da API, as informações sobre o tempo em uma determinada cidade

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    // A função "se" para caso o preenchimento esteja vazio
    if(cidade === '') {
        alert('Por favor, digite o nome da cidade!')
    } 

    colocarDadosNaTela(dados)
}

// função para determinar a escolha da cidade desejada

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
