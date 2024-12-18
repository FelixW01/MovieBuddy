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
    const myTags = [];
    
      for (const movie of moviesArr) {
        console.log(movie.title)
        myTags.push(movie.title)
        
        // divEl.innerHTML += `<p>${movie.title}</p>`
      }
      // tagCloud.js
          var tagCloud = TagCloud('.content', myTags,{
            radius: 300,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true
          
          }); 
          var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
          var random_color = colors[Math.floor(Math.random() * colors.length)];
      
          document.querySelector('.content').style.color = random_color;
        // tagCloud.js
    }
  })
  })
})


