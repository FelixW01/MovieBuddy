const inputEl = document.getElementById('searchInput')
const buttonEl = document.getElementById('searchBtn')
const formEl = document.getElementById('inputForm')
const divEl = document.getElementById('heroDiv')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  const movieInput = inputEl.value
  console.log(movieInput)

  fetch(`/movies?userMovie=${encodeURIComponent(movieInput)}`)
  .then((response) => { 
    response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      const moviesArr = data.getMovieData.results
      for (const movie of moviesArr) {
        console.log(movie.title)
        divEl.innerHTML += `<p>${movie.title}</p>`
      }
    }
  })
  })
})