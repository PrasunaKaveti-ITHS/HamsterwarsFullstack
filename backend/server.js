const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

// Settings
//Heroku uses process.env.PORT
const PORT = process.env.PORT || 1320
const buildFolder = path.join(__dirname, '../build')

// Middleware
// Logger - skriv ut info om inkommande request
app.use((req, res, next) => {
    console.log(`${req.method}  ${req.url} `, req.params);
    next()
})

app.use(express.json())
app.use(cors())//Cross-Origin Resource Sharing (CORS)
app.use(express.static(buildFolder))

// Routes
app.get('/',(req,res) => {
    // Syns inte på grund av express.static
    res.send('Hello from server')
})

const hamstersRoute = require('./routes/hamsters')
app.use('/api/hamsters', hamstersRoute);

const matchesRoute = require('./routes/matches')
app.use('/api/matches', matchesRoute);

const matcheWinnersRoute = require('./routes/matchWinners')
app.use('/api/matchWinners', matcheWinnersRoute);

const winners = require('./routes/winners')
app.use('/api/winners', winners);

const losers = require('./routes/losers')
app.use('/api/losers', losers);

// Sist: fånga alla övriga request
// För att frontend routing ska fungera
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

// Starta servern
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})