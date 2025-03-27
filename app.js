'use strict'

 async function pesquisarFrutasALL(){
     const url = `https://api.codetabs.com/v1/proxy?quest=https://www.fruityvice.com/api/fruit/all` 

    const response = await fetch(url)
    const data = await response.json()

    // console.log(nomeFrutas)
    return data

 }

async function retornarNomes(name){
    const ul = document.getElementById('lista')
    const info = document.getElementById('info')
    const li = document.createElement('li')
    const span = document.createElement('span')

    span.textContent = name

    li.addEventListener('click', async (params) => {
        ul.style.display = 'none'
        const infoFruta = await pesquisa(name)
    
        
        frutainfo(infoFruta, info)
        info.style.display = 'flex'
        // info.textContent = name
        
    })
    
    li.appendChild(span)
    ul.appendChild(li)
}

async function pesquisa(name){
    const frutas = await pesquisarFrutasALL() 
    const fruta = frutas.find(fruta => fruta.name === name)
    return fruta
}
function frutainfo(fruta,div){
    const card = document.getElementById('info')
    const informacoes = document.getElementById('informacoes')
    const nome = document.getElementById('nome')
    const infoFrutas = document.getElementById('infoFrutas')


    const h1Id = document.createElement('p')
    const h1Family = document.createElement('p')
    const h1Order = document.createElement('p')
    const h1Genus = document.createElement('p')
    const h1Nutritions = document.createElement('p')
    const h1Calories = document.createElement('p')
    const h1Fat = document.createElement('p')
    const h1Sugar = document.createElement('p')
    const h1Carbohydrates = document.createElement('p')
    const h1Protein = document.createElement('p')

    const h1Nome = document.createElement('p')

    const spanID = document.createElement('span')
    const spanFamily = document.createElement('span')
    const spanOrder = document.createElement('span')
    const spanGenus = document.createElement('span')
    const spanCalories = document.createElement('span')
    const spanFat = document.createElement('span')
    const spanSugar = document.createElement('span')
    const spanCarbohydrates  = document.createElement('span')
    const spanProtein = document.createElement('span')


    h1Id.textContent = "Id:"
    h1Family.textContent = "Family"
    h1Order.textContent = "Order"
    h1Genus.textContent = "Genus"
    h1Nutritions.textContent = "Nutritions"
    h1Calories.textContent = "Calories"
    h1Fat.textContent = "Fat"
    h1Sugar.textContent = "Sugar"
    h1Carbohydrates.textContent = "Carbohydrates"
    h1Protein.textContent = "Protein"


    h1Nome.textContent = fruta.name
    spanID.textContent = fruta.id
    spanFamily.textContent = fruta.family
    spanOrder.textContent = fruta.order
    spanGenus.textContent = fruta.genus
    spanCalories.textContent = fruta.calories
    spanFat.textContent = fruta.fat
    spanSugar.textContent = fruta.sugar
    spanCarbohydrates.textContent = fruta.Carbohydrates
    spanProtein.textContent = fruta.protein


    div.appendChild(h1Nome)
    div.appendChild(spanID)
    div.appendChild(spanFamily)
    div.appendChild(spanOrder)
    div.appendChild(spanGenus)
    
}


async function render(){
    const data = await pesquisarFrutasALL()
    const nomeFrutas = []
    data.forEach(function(frutas){
        nomeFrutas.push(frutas.name)
    })

    nomeFrutas.forEach(retornarNomes)
}

const usuarioPesquisa = "Todas as frutas"

function apagar (){
    const base = document.getElementById('containertexto')
    base.style.display = "none"
}

document.getElementById('pesquisar')
    .addEventListener('click', async (params) => {
        if(document.getElementById('frutas').value == usuarioPesquisa){
            apagar()
                render()
        }
    })

