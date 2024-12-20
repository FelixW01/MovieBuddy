const express = require('express');
const path = require('path')
const app = express();
const getMovieId = require('./utils/movie')
const getMovie = require('./utils/getMovie')

const PORT = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index'))
})

app.get('/movies', (req, res) => {
    const {userMovie} = req.query

    if (!userMovie) {
        return res.send({error: 'You must provide a movie!'})
    }

    getMovieId(userMovie, (err, {movieId}) => {
        if(err) {
            console.log(err)
            return res.send({err})
        }
        getMovie(movieId, (err, getMovieData) => {
            if(err) {
                console.log(err)
                return res.send({err})
            }
            res.send({getMovieData})
        })
    })
})

app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
})