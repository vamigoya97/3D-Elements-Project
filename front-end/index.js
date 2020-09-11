console.log("working")

const elementsContainer = document.querySelector("#elements")

fetch("http://localhost:3000/elements")
    .then(response => response.json())
    .then(elements => elements.forEach( element => {
        const elementCard = document.createElement('h3')

        elementCard.innerHTML = `<a href="http://localhost:3001/element.html?id=${element.id}">${element.name}</a>`

        elementsContainer.appendChild(elementCard)

    }))

