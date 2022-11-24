import minimist from 'minimist'
import express from 'express'
import { roll } from './lib/roll.js'

const app = express()
var argv = minimist(process.argv.slice(2))

const port = argv.port || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/app/', (req, res, next) => {
    res.status(200).send('200 OK')
})

const sides = 6
const dice = 2
const rolls = 1

app.get('/app/roll/', (req, res) => {
    res.send(roll(sides, dice, rolls));
})

app.post('/app/roll/', (req, res) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    res.send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/', (req, res) => {
    const sides = parseInt(req.params.sides);
    res.send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    res.send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    res.send(roll(sides, dice, rolls));
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port, () => {
    console.log("Server listening on port " + port);
})
