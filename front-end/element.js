console.log("working")

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
console.log(id, "id")

const elementSpan = document.querySelector("#element")

fetch(`http://localhost:3000/elements/${id}`)
    .then(response => response.json())
    .then(element =>  {
        const symbolCard = document.createElement('h3')
        const massCard = document.createElement('h3')
        const percentageCard = document.createElement('h3')
        const iframeCard = document.getElementById('3d-model').setAttribute("src", `${element.image_URL}`)

        symbolCard.innerHTML = `<p>SYMBOL</p><br> <span style="font-size:50px;">${element.symbol}</span><br>`
        massCard.innerHTML = `<p>ATOMIC MASS</p><br> <span style="font-size:50px;"> ${element.atomic_mass}</span><br>`
        percentageCard.innerHTML = `<p>PERCENTAGE ON EARTH</p><br> <span style="font-size:50px;">${element.percentage}%</span><br>`
        

        elementSpan.append(symbolCard, percentageCard, massCard)
    })
    

    



