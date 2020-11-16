import $, { get } from 'jquery'

function main() {
    $('form').submit(function(event) {
        event.preventDefault()
        let user = $('#js-user-search').val()
        getRepos(user)
    })
}

function getRepos(query) {
    //makes a call to the github api and searches for repos associated with that user id.
    fetch(`https://api.github.com/users/${query}/repos`).then(response => response.json())
    .then(responseJson => displayResults(responseJson))
}

function displayResults(responseJson) {
//maps through the array of results to find and display a <li> that contains the repo name and a link
$('.js-results-list').empty()
$('js-results-list').toggleClass('hidden')
responseJson.map(i => $('.js-results-list').append(`<li> <h2>${i.name}</h2> ${i.url} </li>`))
console.log(responseJson[0].name, responseJson[0].url)
}

$(main)