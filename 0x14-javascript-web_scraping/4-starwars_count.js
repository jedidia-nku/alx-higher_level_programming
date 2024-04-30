<<<<<<< HEAD
t request = require('request');
=======
#!/usr/bin/node

const request = require('request');
>>>>>>> 5ea10fcd83d3e5350e69fe8353e614a0cdb15142

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
  } else {
    const films = JSON.parse(body).results;
    const characterId = '18';
    const count = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(count);
  }
});
