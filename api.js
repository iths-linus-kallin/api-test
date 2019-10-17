let data;

async function getData(){
    let response = await fetch('https://www.amiiboapi.com/api/amiibo/')
    let responseBody = await response.json()
    return responseBody.amiibo
}

async function render(){
    let list = await getData()
    data = list
    let ul = document.querySelector("ul")
    let itemPrototype = document.querySelector("li.prototype")
    let photo = document.querySelector(".photo")
    let name = document.querySelector(".name")
    let game = document.querySelector(".game")
    photo.src = list[0].image
    name.innerHTML = list[0].name
    game.innerHTML = list[0].gameSeries

    for(let item of list){
        let newItem = itemPrototype.cloneNode(true)
        newItem.classList.remove("prototype")
        newItem.classList.add("characters")
        newItem.addEventListener("click", function(){
            photo.src = item.image
            name.innerHTML = item.name
            game.innerHTML = item.gameSeries
        })

    newItem.innerText = item.name
    ul.append(newItem)
    }
}


render()