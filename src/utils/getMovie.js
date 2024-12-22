const request = require('postman-request');
require('dotenv').config()

const getMovie = (movieId, callback) => {
  const apiKey = process.env.API_KEY;
  const userMovieId = movieId;

  const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(userMovieId)}/similar?api_key=${apiKey}&include_adult=false&language=en-US&page=1`;

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
    callback(undefined, results)
  }
});
}

module.exports = getMovie