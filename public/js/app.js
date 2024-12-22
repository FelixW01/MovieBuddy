const inputEl = document.getElementById('searchInput')
const buttonEl = document.getElementById('searchBtn')
const formEl = document.getElementById('inputForm')
const divEl = document.getElementById('heroDiv')
const cloudEl = document.getElementById('floatingWords')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  const movieInput = inputEl.value

  if (!movieInput.trim()) {
    alert('Please search a movie!');
    return;
  }

  // Fetch the api based on user input
  fetch(`/movies?userMovie=${encodeURIComponent(movieInput)}`)
  .then((response) => { 
    response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
    // Reset tagCloud sphere
    cloudEl.innerHTML = ""
    const myTags = [];
    const moviesArr = data.getMovieData.results
    console.log(moviesArr, '<<<< Movie Data')

    let i = 0
    for (const movie of moviesArr) {
      if (i < 10) {
      let template = `
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}-poster">
        <div class="card-body">
          <p class="card-title">${movie.title}</p>
          <p class="card-text"><small>Release Date: ${movie.release_date}</small></p>
          <p class="card-text">${movie.overview}</p>
        </div>
      </div>
    `;
      divEl.innerHTML += template;
      console.log(movie)
      i++
      }
    }
    }
  })
  })
})


      