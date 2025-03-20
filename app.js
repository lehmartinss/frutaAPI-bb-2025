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
        console.log(infoFruta);
        
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
function frutainfo(fruta, div){
    const h1 = document.createElement('h1')
    const spanID = document.createElement('span')
    const spanFamily = document.createElement('span')
    const spanOrder = document.createElement('span')
    const spanGenus = document.createElement('span')
    const spanNutritions = document.createElement('span')
    h1.textContent = fruta.name
    spanID.textContent = fruta.id
    spanFamily.textContent = fruta.family
    spanOrder.textContent = fruta.order
    spanGenus.textContent = fruta.genus
    spanNutritions.textContent = fruta.nutritions

    div.appendChild(h1)
    div.appendChild(spanID)
    div.appendChild(spanFamily)
    div.appendChild(spanOrder)
    div.appendChild(spanGenus)
    div.appendChild(spanNutritions)
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





// function dadosFrutas(dados){
//     const ul  = document.getElementById('lista')
//     const li = document.createElement('li')
//     const span = document.createElement('span')
//     span.textContent = dados
    
//     li.appendChild(span)
//     ul.appendChild(li)
// }

// async function renderDosDados(){
//     const dadosDaFrutas = await pesquisarFrutasALL()
//     dadosDaFrutas.forEach(dadosFrutas)
// }

// function apagarLista (){
//     const base = document.getElementById('lista-container')
//     base.style.display = "none"
// }

// document.getElementById('pesquisar')
//     .addEventListener('click', async (params) => {
//         if(document.getElementById('frutas').value == usuarioPesquisa){
//             apagarLista()
//                 renderDosDados()
//         }
//     })







// async function pesquisarFamilia(){
//     const url = `https://api.codetabs.com/v1/proxy?quest=https://www.fruityvice.com/api/fruit/family/:family` 

//    const response = await fetch(url)
//    const data = await response.json()
//    const familiaFrutas = []
//    data.forEach(function(frutas){
//     familiaFrutas.push(frutas.family)
//    })

//    // console.log(familiaFrutas)
//    return familiaFrutas

// }

// function retornarfamilia(family){
//     const ul = document.getElementById('dadosfamilia')
//     const li = document.createElement('li')
//     const span = document.createElement('span')
//     span.textContent = family
    
//     li.appendChild(span)
//     ul.appendChild(li)
// }

// async function renderFamilia(){
//     const familiaFrutas = await pesquisarFamilia()
//     familiaFrutas.forEach(retornarfamilia)
// }

// document.getElementById('pesquisar')
//     .addEventListener('click', async (params) => {
//         if(document.getElementById('frutas').value == usuarioPesquisa){
//             apagar()
//                 render()
//         }
//     })