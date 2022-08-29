let listItens =[]
let listFigures=[]
let listFrames=[]

function addItens (imagem, nome, preco, tipo){
    item ={
        Image: imagem,
        Name: nome,
        Price: preco,
        Type: tipo,
    }
 
    listItens.push(item)
}

addItens("./assets/img/painting/clock.jpg","clock",1000,"frames")
addItens("./assets/img/painting/gamepad.jpg","gamepad",100,"frames")
addItens("./assets/img/painting/personagem.jpg","personagem",500,"frames")
addItens("./assets/img/actions/animewoman.jpg","animewoman",2000,"figures")
addItens("./assets/img/actions/dragonballpersonagem.jpg","dragonballpersonagem",760,"figures")
addItens("./assets/img/actions/starwarspersonagem.jpg","starwarspersonagem",210,"figures")
addItens("./assets/img/painting/clock.jpg","clock",1000,"frames")
addItens("./assets/img/painting/gamepad.jpg","gamepad",100,"frames")
addItens("./assets/img/painting/personagem.jpg","personagem",500,"frames")
addItens("./assets/img/actions/animewoman.jpg","animewoman",2000,"figures")
addItens("./assets/img/actions/dragonballpersonagem.jpg","dragonballpersonagem",760,"figures")
addItens("./assets/img/actions/starwarspersonagem.jpg","starwarspersonagem",210,"figures")

//console.log(listItens)

function separateItens (list){

    //console.log(list)
    //console.log(list.length)
    for (let i=0; i<list.length; i++){
        if (list[i].Type==="frames"){
            listFrames.push(list[i])
        }
        if (list[i].Type==="figures"){
            listFigures.push(list[i])
        }
    }
}
separateItens(listItens)
// console.log(listFrames)
// console.log(listFigures)

let teste =document.getElementById("list-paintings")


for (let i=0; i<listFrames.length; i++){
    teste.innerHTML += `<li class="card">
<div class="card-interno-superior">
    <img src="${listFrames[i].Image}" alt="${listFrames[i].Name}">
</div>
<div class="card-interno-inferior">
    <p class="card-titulo">${listFrames[i].Name}</p>
    <p class="card-valor-produto">R$ ${listFrames[i].Price}</p>
</div>
</li> `
}


let teste2 =document.getElementById("list-action-figure")
for (let i=0; i<listFigures.length; i++){
    teste2.innerHTML += `<li class="card">
<div class="card-interno-superior">
    <img src="${listFigures[i].Image}" alt="${listFigures[i].Name}">
</div>
<div class="card-interno-inferior">
    <p class="card-titulo">${listFigures[i].Name}</p>
    <p class="card-valor-produto">R$ ${listFigures[i].Price}</p>
</div>
</li> `
}