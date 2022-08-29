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




function criarListaHtml (list , classHtml) {
    
    let tagUl = document.getElementById(classHtml)

    
    let tagLi = document.createElement("li")
    let tagDivCardInternoSuperior = document.createElement("div")
    let tagDivCardInternoInferior = document.createElement("div")
    let tagImgCardInternoSuperior = document.createElement("img")
    let tagPcardTitulo = document.createElement("p")
    let tagPcardValorProduto = document.createElement("p")
    
    for (let i=0; i<list.length; i++){
    
        tagLi = document.createElement("li")
        tagLi.classList.add("card") 
        tagUl.appendChild(tagLi)
    
        tagDivCardInternoSuperior = document.createElement("div")
        tagDivCardInternoSuperior.classList.add("card-interno-superior")
        tagLi.appendChild(tagDivCardInternoSuperior)
    
        tagDivCardInternoInferior = document.createElement("div")
        tagDivCardInternoInferior.classList.add("card-interno-inferior")
        tagLi.appendChild(tagDivCardInternoInferior)
    
        tagImgCardInternoSuperior = document.createElement("img")
        tagDivCardInternoSuperior.appendChild(tagImgCardInternoSuperior)
        tagImgCardInternoSuperior.setAttribute("src", list[i].Image)
    
        tagPcardTitulo = document.createElement("p")
        tagPcardTitulo.classList.add("card-titulo")
        tagDivCardInternoInferior.appendChild(tagPcardTitulo)
        tagPcardTitulo.innerText=list[i].Name
    
        tagPcardValorProduto = document.createElement("p")
        tagPcardValorProduto.classList.add("card-valor-produto")
        tagDivCardInternoInferior.appendChild(tagPcardValorProduto)
        tagPcardValorProduto.innerText= `R$ ${list[i].Price}`     
    
    }
}

criarListaHtml(listFrames,"list-paintings")
criarListaHtml(listFigures,"list-action-figures")
