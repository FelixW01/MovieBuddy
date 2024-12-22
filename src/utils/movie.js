const request = require('postman-request');
require('dotenv').config()

const getMovieId = (userMovie, callback) => {
  const apiKey = process.env.API_KEY;
  const query = userMovie;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
};
request({ url: url, options }, (err, response, body) => {
  if (err) {
      callback('Unale to connect to movie services!', err)
  } else if (response.statusCode !== 200) {
    console.log(response.statusCode)
      callback('Unable to fetch movie services!', response.statusCode)
  } else {
    const results = JSON.parse(body);
    const movieId = results.results[0].id
    callback(undefined, {movieId: movieId, searchedMovie: results});
  }
});
}

module.exports = getMovieId