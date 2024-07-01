const mongoose = require('mongoose')
const urlBD = 'mongodb://localhost:27017/Biblioteca'

mongoose.connect(urlBD)
.then(() => {
    console.log('Bienvenido lector');
})
.catch((err) => {
    console.log('Huh...falló');
})

const esquemaLibros = new mongoose.Schema({
    title: {type: String},
    pages: {type: Number},
    author: {type: String}
})

const modeloLibros = new mongoose.model('Libros', esquemaLibros)
modeloLibros.create({
    title: 'IT',
    pages: 1504,
    author: 'Stephen King'
})