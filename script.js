let games = [];
let software = [];

function fetchGames() {
    fetch('gamelibraryapi')
    .then((response) => response.json())
    .then((data) => {
        games =  data.map((x) => x.jsonlocation.jsonlocation);
        games.sort();
        console.log(games);
    });
}

function fetchSoftware() {
    fetch('softwarelibraryapi')
    .then((response) => response.json())
    .then((data) => {
        software =  data.map((x) => x.jsonlocation.jsonlocation);
        software.sort();
        console.log(software);
    });
}

fetchGames();
fetchSoftware();
