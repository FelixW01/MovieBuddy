const inputEl = document.getElementById('searchInput')
const buttonEl = document.getElementById('searchBtn')
const formEl = document.getElementById('inputForm')
const divEl = document.getElementById('heroDiv')
const cloudEl = document.getElementById('floatingWords')

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
    cloudEl.innerHTML = ""
    const myTags = [];
    const moviesArr = data.getMovieData.results

    if (myTags.length > 0) {
      myTags = [];
    } else {
      for (let i = 0; i < moviesArr.length; i++) {
        if (i <= 20) {
          myTags.push(moviesArr[i].title)
          console.log(moviesArr[i].title, `<<<< ${i}`)
        } else {
          break
        }
      }
    }

    // tagCloud.js
    var tagCloud = TagCloud('.content', myTags,{
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true
    }); 

    var colors = ['#006A67', '#ECDFCC', '#697565', '#E8BCB9', '#6EACDA', '#4B70F5'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('.content').style.color = random_color;
  // tagCloud.js
    }
  })
  })
})


      