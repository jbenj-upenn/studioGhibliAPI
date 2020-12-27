const app = document.getElementById('root')

const logo = document.createElement('img')

// must get access to logo
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// Create a req var and create XMLHttpRequest object
var request = new XMLHttpRequest()

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
    //Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {

        data.forEach((movie) => {
            // Create a div with a card class here
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create h1 and set text content to film's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            // Create p and set text to description
            const p = document.createElement('p')
            // Limit desc to 300 chars
            movie.description = movie.description.substring(0, 250)
            p.textContent = `${movie.description}...`
            // append cards to container 
            container.appendChild(card)

            // each card contains h1 and p
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = 'The darn thing is broken!'
        app.appendChild(errorMessage)
    }
}

// Send request
request.send()