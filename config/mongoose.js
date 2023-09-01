const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aysnr0204:aysnrakca01@cluster0.1p0zvyl.mongodb.net/')
.then(()=> console.log('Connected DB'))
.catch((err)=> console.log('you have a error about connecting DB',err))