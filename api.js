async function getData(){
    let response = await fetch('https://www.amiiboapi.com/api/amiibo/')
    let responseBody = await response.json()
    return responseBody.amiibo
}

async function render(){
    let list = await getData()
    let ul = document.querySelector("ul")
    let itemPrototype = document.querySelector("li.prototype")
    for(let item of list){
        let newItem = itemPrototype.cloneNode(true)
        newItem.classList.remove("prototype")
        let p = newItem.querySelector("p")
        p.innerText = item.name
        ul.append(newItem)
    }
}

function showData(){
    let photo = document.querySelector(".photo")
    let name = document.querySelector(".name")
    let gameSeries = document.querySelector(".gameSeries")
    document.querySelector("li.prototype").addEventListener("click", function(){
        photo.src = item.image
        name.innerHTML = item.name
        gameSeries.innerHTML = item.gameSeries
    })
}

render()
showData()