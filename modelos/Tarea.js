/*
    Crear la carpeta modelos y dentro el archivo Tarea.js,
    donde se creará un esquema para los documentos de la colección tareas.
*/
console.log('Entrando a Tarea.js');
const mongoose = require('mongoose');
let TareaSchema = new mongoose.Schema({
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});
module.exports = mongoose.model('Tarea', TareaSchema);