// Create a req var and create XMLHttpRequest object
var request = new XMLHttpRequest()

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
    //Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
    
    data.forEach((movie) => {
        // Log each movie title
        console.log(movie.title)
    })
} else {
    console.log('error')
}

// Send request
request.send()
}

const app = document.getElementById('root')

const logo = document.createElement('img')

// must get access to logo
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

