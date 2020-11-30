/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*---- [MY KEY b1ae8513]----
**/


let url          = 'http://www.omdbapi.com/?apikey=b4b7cffe=';

let container    = document.getElementById('main-content');
let searchInput  = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');
let option       = document.getElementById('type');


searchButton.addEventListener('click', fetchData);
// searchInput= "";

async function fetchData() {
    try {
        
        // Första parametern i är 's=' som står för 'Search' och andra parametern är 'type=' som avgör om det är movie/serie
        //searchInput.value tar emot det använder skriver
        //option.value sorterar typen av film beronde på om man väljer 'movie, series, episode'.

        let response = await fetch('http://www.omdbapi.com/?apikey=b4b7cffe&s=' + searchInput.value + '&type=' + option.value);
        
        let data = await response.json();

        console.log(data);
        container.innerHTML = "";
        let searchResult = data['Search']

        for (let result in searchResult){
            
            
            console.log(`You searched for ${searchInput.value}`);
           
            container.innerHTML += `<ul><li> ${searchResult[result].Title} </li></ul>`;
            
        }
        
    } catch(message) {
        throw new Error(message);
    }
}


