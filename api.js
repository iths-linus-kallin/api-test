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

// SÖKFUNKTION

async function search(){
    var input = document.querySelector("input");
    let list = await getData()
    data = list

    input.addEventListener("keyup", event =>{
        
        let characters = document.querySelectorAll(".characters")
        var matchingNames = []
        let ul = document.querySelector("ul")

        for(let item of data){
            if (item.name.startsWith(input.value)){
                matchingNames.push(item.name)
            }else{
                item++
            }
        }

        for(let li of characters){
            li.remove()
        }

        for(let item of matchingNames){
            var list = document.createElement("li")
            list.innerText = matchingNames[item]
            list.classList.add("characters")
            ul.append(list)
        }

    })

    document.addEventListener("keypress", event=>{
        if(event=="Enter"){
            input.value = matchingNames[0]
        }
    })

    document.querySelectorAll(".characters").onclick = function(){
        input.value = list.value;
    }
}

render()
search()