// Create a req var and create XMLHttpRequest object
var request = new XMLHttpRequest()

// Open a new connection using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
    //Begin accessing JSON data here
    var data = JSON.parse(this.response)

    data.forEach((movie) => {
        // Log each movie title
        console.log(movie.title)
    })
}

// Send request
request.send()
