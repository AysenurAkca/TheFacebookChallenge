const express = require('express')
const app = express()
const route = require('./config/routes')

require('./config/mongoose')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))
app.use(route)

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})