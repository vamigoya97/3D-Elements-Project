console.log("working")

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
console.log(id, "id")

const elementDiv = document.querySelector("#element")
const modelDiv = document.querySelector("#model")

fetch(`http://localhost:3000/elements/${id}`)
    .then(response => response.json())
    .then(element =>  {
        const symbolCard = document.createElement('h3')
        const massCard = document.createElement('h3')
        const percentageCard = document.createElement('h3')
        const iframeCard = document.getElementById('3d-model').setAttribute("src", `${element.image_URL}`)

        symbolCard.textContent = `SYMBOL : ${element.symbol}`
        massCard.textContent = `ATOMIC MASS : ${element.atomic_mass}`
        percentageCard.textContent = `PERCENTAGE ON EARTH : ${element.percentage}`
        

        elementDiv.append(symbolCard, massCard, percentageCard)
        modelDiv.appendChild(iframeCard)
    })
    

    



