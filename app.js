// 'use strict'

//  async function pesquisarFrutasALL(){
//      const url = `https://api.codetabs.com/v1/proxy?quest=https://www.fruityvice.com/api/fruit/all` 

//     const response = await fetch(url)
//     const data = await response.json()

//     // console.log(nomeFrutas)
//     return data

//  }

// async function retornarNomes(name){
//     const ul = document.getElementById('lista')
//     const info = document.getElementById('info')
//     const li = document.createElement('li')
//     const span = document.createElement('span')

//     span.textContent = name

//     li.addEventListener('click', async (params) => {
//         ul.style.display = 'none'
//         const infoFruta = await pesquisa(name)
    
        
//         frutainfo(infoFruta, info)
//         info.style.display = 'flex'
//         // info.textContent = name
        
//     })
    
//     li.appendChild(span)
//     ul.appendChild(li)
// }

// async function pesquisa(name){
//     const frutas = await pesquisarFrutasALL() 
//     const fruta = frutas.find(fruta => fruta.name === name)
//     return fruta
// }


// // Exibe na tela
// function frutainfo(infoFruta, info) {
//     info.classList.add("info-card");

//     info.style.display = "flex";
//     info.style.flexDirection = "column";
//     info.style.alignItems = "center";
//     info.style.justifyContent = "center";
//     info.style.backgroundColor = "#b0c4a3"; // Cor do fundo do card
//     info.style.borderRadius = "20px";
//     info.style.padding = "20px";
//     info.style.width = "60%";
//     info.style.margin = "20px auto";
//     info.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
  
//     info.innerHTML = `
//         <div>
//           <header>
//             <h1>${infoFruta.name}</h1>
//           </header> <!-- Corrigido o fechamento da tag -->
    
//           <ul>
//             <li><strong>Id: ${infoFruta.id}</li>
//             <li><strong>Family: ${infoFruta.family}</li>
//             <li><strong>Order: ${infoFruta.order}</li>
//             <li><strong>Genus: ${infoFruta.genus}</li>
//             <h1>Nutritions:</h1>
//             <li>Calories: ${infoFruta.nutritions.calories}</li>
//             <li>Fat: ${infoFruta.nutritions.fat}</li>
//             <li>Sugar: ${infoFruta.nutritions.sugar}</li>
//             <li>Carbohydrates: ${infoFruta.nutritions.carbohydrates}</li>
//             <li>Protein: ${infoFruta.nutritions.protein}</li>
//           </ul>
//         </div> 
//       `;
//   }

//   async function listarFrutas() {
//     const frutas = await pesquisarFrutasALL();
//     const homeScreen = document.getElementById("containertexto");
//     const lista = document.getElementById("lista");
//     const infoContainer = document.getElementById("info");
  
//     homeScreen.style.display = "none";
//     infoContainer.style.display = "none";
//     lista.innerHTML = "";
//     lista.style.display = "block";
  
//     frutas.forEach((fruta) => {
//       const li = document.createElement("li");
//       li.textContent = fruta.name;
//       li.addEventListener("click", async () => {
//         lista.style.display = "none";
//         infoContainer.style.display = "flex";
//         infoContainer.innerHTML = "";
//         const infoFruta = await pesquisa(fruta.name);
//         frutainfo(infoFruta, infoContainer);
//       });
//       lista.appendChild(li);
//     });
//   }

//   async function pesquisarPorFamilia(familia) {
//     const frutas = await pesquisarFrutasALL();
//     const frutasFiltradas = frutas.filter(
//       (fruta) => fruta.family.toLowerCase() === familia.toLowerCase()
//     );
//  }

//  const homeScreen = document.getElementById("containertexto");
//  const lista = document.getElementById("lista");
//  const infoContainer = document.getElementById("info");

//  homeScreen.style.display = "none";
//  infoContainer.style.display = "none";
//  lista.innerHTML = "";
//  lista.style.display = "flex";
//  lista.style.flexWrap = "wrap";
//  lista.style.justifyContent = "center";
//  lista.style.alignItems = "center";
//  lista.style.gap = "30px";
//  lista.style.padding = "20px";
//  lista.style.textAlign = "center";


//  if (frutasFiltradas.length === 0) {
//     lista.innerHTML = <p style="font-size: 18px;">Nenhuma fruta encontrada para essa família.</p>;
//     return;
//   }

//   frutasFiltradas.forEach((fruta) => {
//     const div = document.createElement("div");
//     div.style.textAlign = "center";
//     div.style.fontFamily = "monospace";
//     div.style.fontSize = "18px";
//     div.style.padding = "10px";
//     div.style.borderRadius = "8px";

//     div.innerHTML = `
//     <p style="font-size: 22px; font-weight: bold;">• ${fruta.name}</p>
//     <p><strong style="color: red;">Family:</strong> ${fruta.family}</p>
//     <p><strong style="color: red;">Order:</strong> ${fruta.order}</p>
//     <p><strong style="color: red;">Genus:</strong> ${fruta.genus}</p>
//   `;

//   lista.appendChild(div);
// });

// async function pesquisa(name) {
//     const frutas = await pesquisarFrutasALL();
//     return frutas.find((fruta) => fruta.name === name);
// }

// // Evento ao clicar no botão de pesquisa
// document.getElementById("pesquisar").addEventListener("click", async () => {
//     const inputValor = document.getElementById("frutas").value.trim();
  
//     if (inputValor.toLowerCase() === "Todas as frutas") {
//       listarFrutas();
//     } else {
//       pesquisarPorFamilia(inputValor);
//     }
//   });


// async function render(){
//     const data = await pesquisarFrutasALL()
//     const nomeFrutas = []
//     data.forEach(function(frutas){
//         nomeFrutas.push(frutas.name)
//     })

//     nomeFrutas.forEach(retornarNomes)
// }

// const usuarioPesquisa = "Todas as frutas"

// function apagar (){
//     const base = document.getElementById('containertexto')
//     base.style.display = "none"
// }

// document.getElementById('pesquisar')
//     .addEventListener('click', async (params) => {
//         if(document.getElementById('frutas').value == usuarioPesquisa){
//             apagar()
//                 render()
//         }
//     })


async function pesquisarFrutasALL() {
  const url = `https://api.codetabs.com/v1/proxy?quest=https://www.fruityvice.com/api/fruit/all`;
  const response = await fetch(url);
  return response.json();

}

function frutainfo(infoFruta, info) {
  info.classList.add("info-card");

  info.style.display = "flex";
  info.style.flexDirection = "column";
  info.style.alignItems = "center";
  info.style.justifyContent = "center";
  info.style.backgroundColor = "#b0c4a3"; // Cor do fundo do card
  info.style.borderRadius = "20px";
  info.style.padding = "20px";
  info.style.width = "60%";
  info.style.margin = "20px auto";
  info.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";

  info.innerHTML = `
    <h1 style="font-size: 24px; font-weight: bold;">${infoFruta.name}</h1>
    
    <ul style="list-style: none; padding: 0; text-align: center;">
      <li><strong style="color: red;">Id:</strong> ${infoFruta.id}</li>
      <li><strong style="color: red;">Family:</strong> ${infoFruta.family}</li>
      <li><strong style="color: red;">Order:</strong> ${infoFruta.order}</li>
      <li><strong style="color: red;">Genus:</strong> ${infoFruta.genus}</li>
      <li><strong style="color: red;">Nutritions:</strong></li>
      <li><strong style="color: white;">calories:</strong> ${infoFruta.nutritions.calories}</li>
      <li><strong style="color: white;">fat:</strong> ${infoFruta.nutritions.fat}</li>
      <li><strong style="color: white;">sugar:</strong> ${infoFruta.nutritions.sugar}</li>
      <li><strong style="color: white;">carbohydrates:</strong> ${infoFruta.nutritions.carbohydrates}</li>
      <li><strong style="color: white;">protein:</strong> ${infoFruta.nutritions.protein}</li>
    </ul>
  `;
}


async function listarFrutas() {
  const frutas = await pesquisarFrutasALL();
  const homeScreen = document.getElementById("containertexto");
  const lista = document.getElementById("lista");
  const infoContainer = document.getElementById("info");

  homeScreen.style.display = "none";
  infoContainer.style.display = "none";
  lista.innerHTML = "";
  lista.style.display = "block";

  frutas.forEach((fruta) => {
    const li = document.createElement("li");
    li.textContent = fruta.name;
    li.addEventListener("click", async () => {
      lista.style.display = "none";
      infoContainer.style.display = "flex";
      infoContainer.innerHTML = "";
      const infoFruta = await pesquisa(fruta.name);
      frutainfo(infoFruta, infoContainer);
    });
    lista.appendChild(li);
  });
}

async function pesquisarPorFamilia(familia) {
  const frutas = await pesquisarFrutasALL();
  const frutasFiltradas = frutas.filter(
    (fruta) => fruta.family.toLowerCase() === familia.toLowerCase()
  );

  const homeScreen = document.getElementById("containertexto");
  const lista = document.getElementById("lista");
  const infoContainer = document.getElementById("info");

  homeScreen.style.display = "none";
  infoContainer.style.display = "none";
  lista.innerHTML = "";
  lista.style.display = "flex";
  lista.style.flexWrap = "wrap";
  lista.style.justifyContent = "center";
  lista.style.alignItems = "center";
  lista.style.gap = "30px";
  lista.style.padding = "20px";
  lista.style.textAlign = "center";

  if (frutasFiltradas.length === 0) {
    lista.innerHTML = `<p style="font-size: 18px;">Nenhuma fruta encontrada para essa família.</p>;`
    return;
}

  frutasFiltradas.forEach((fruta) => {
    const div = document.createElement("div");
    div.style.textAlign = "center";
    div.style.fontFamily = "monospace";
    div.style.fontSize = "18px";
    div.style.padding = "10px";
    div.style.borderRadius = "8px";

    div.innerHTML = `
      <p style="font-size: 22px; font-weight: bold;">• ${fruta.name}</p>
      <p><strong style="color: red;">Family:</strong> ${fruta.family}</p>
      <p><strong style="color: red;">Order:</strong> ${fruta.order}</p>
      <p><strong style="color: red;">Genus:</strong> ${fruta.genus}</p>
    `;

    lista.appendChild(div);
  });
}

async function pesquisa(name) {
  const frutas = await pesquisarFrutasALL();
  return frutas.find((fruta) => fruta.name === name);
}

// Evento ao clicar no botão de pesquisa
document.getElementById("pesquisar").addEventListener("click", async () => {
  const inputValor = document.getElementById("frutas").value.trim();

  if (inputValor.toLowerCase() === "Todas as frutas") {
    listarFrutas();
  } else {
    pesquisarPorFamilia(inputValor);
  }
});

