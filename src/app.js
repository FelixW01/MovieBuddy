const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.sendFile('index')
})

app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
})