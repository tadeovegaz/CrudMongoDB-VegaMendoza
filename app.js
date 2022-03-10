const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const peliculas = require('./routes/peliculas')
app.use(peliculas)

app.get('/', (req, res)=>{
    res.send('hola mundo')
})


app.listen(3000, ()=>{
    console.log(`server UP en http://localhost:${3000}`)
})