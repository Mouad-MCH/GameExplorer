const API_KEY = "b4af8081be5a413094f032ad0502d611";

fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => console.log(data.results, data.results.length));
