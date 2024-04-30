t request = require('request');
const process = require('process');

const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) return;
  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    let count = 0;
    for (const item of data.results) {
      for (const actor of item.characters) {
        const actorSplit = actor.split('/');
        const actorId = actorSplit[actorSplit.length - 2];
        if (actorId === '18') {
          count++;
        }
      }
    }
    console.log(count);
  }
});
