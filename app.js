'use strict'

 async function pesquisarFrutasALL(){
     const url = `https://api.codetabs.com/v1/proxy?quest=https://www.fruityvice.com/api/fruit/all` 

    const response = await fetch(url)
    const data = await response.json()
    const nomeFrutas = []
    data.forEach(function(frutas){
        nomeFrutas.push(frutas.name)
    })

    // console.log(nomeFrutas)
    return nomeFrutas

 }
function retornarNomes(name){
    const ul = document.getElementById('lista')
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.textContent = name
    
    li.appendChild(span)
    ul.appendChild(li)
}


async function render(){
    const nomeFrutas = await pesquisarFrutasALL()
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
