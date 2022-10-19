// En servidor.js importar express.
const express = require('express');
// En una variable se almacena una instancia de express.
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
// se importa el modelo
const TareaSchema = require('./modelos/Tarea.js');
/*
    Para identificar correctamente los datos de las peticiones POST y PUT,
    es necesario usar los métodos urlencoded() y json() de express.
*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

// conexion a la base de datos de mongodb
mongoose.connect('mongodb+srv://jbermudezb:32Ji88BN3az3yR8A@cl-mision-tic.r8yw29i.mongodb.net/ActividadesDB?retryWrites=true&w=majority');

// Activar el servidor y enviar el puerto por el que escuchara.
app.listen(3000, () => {
    console.log('Escuchando por puerto 3000');
});

router.get('/', (req, res) => {
    res.send('Inicio de la API');
});

// Crear la ruta para insertar tarea
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });
    nuevaTarea.save(function(err, datos){
        if (err) {
            console.log(err);
        }
        else{
            res.send('Tarea almacenada correctamente');
        }
    });
});

// Crear la ruta para ver las tareas
router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if (err) {
            console.log("Error leyendo las tareas");
        }
        else{
            res.send(datos);
        }
    });
});
