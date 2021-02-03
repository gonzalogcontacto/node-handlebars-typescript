import express from 'express';

import handlebars from 'express-handlebars'; // Handelbars
import path from 'path' // Path de Node

// Importing Routes
import IndexRoutes from './routes';
import clientsRoutes from './routes/clients';

// Inicialización
const app = express();

// Settings
app.set('port', 2000);

//Cargamos el folder de las vistas
app.set('views', path.join(__dirname, 'views'))

// Cómo funciona el módulo de plantillas
app.engine('.hbs', handlebars({
    extname: '.hbs', // Extensiones de los archivos para handlebars
    layoutsDir: path.join(app.get('views'), 'layouts'), // Directorio principal de layouts
    partialsDir: path.join(app.get('views'), 'partials'), // trozos html reutilizables en el proyecto
    defaultLayout: 'main' // Archivo principal para las vistas
}));

// Una vez definido, usamos como engine hbs (handlebars)
app.set('view engine', '.hbs')

// Middlewares
app.use(express.json()); // Poder interpretar json en las peticiones
app.use(express.urlencoded({extended: false}));// Cuando un formulario de HTML me envíe un dato poder interpretar esos datos


// --------------------- RUTAS PRO -----------------------

// use por que es un objecto con muchas rutas
app.use('/product', IndexRoutes);
app.use('/clients', clientsRoutes);


// ---------------------- RUTAS PRO -----------------------


// -------------------- Ejemplo de Routes en el index ---------------

interface User {
    id:Number,
    name:String
};

let clients: Array<User> = [
    { id: 1, name: 'Gonzalo García' },
    { id: 2, name: 'Pepe'}
];

app.get('/client/:id', (req, res) => {
    console.log(req.params.id);
    
    res.send(clients.filter(item => item.id === Number(req.params.id)));
    res.send(clients.reduce((prev, current) => prev || current.id === Number(req.params.id) ? current : {id: 0, name: ''}));

})

app.get('/client', (req, res) => {
    res.send(clients);
})

app.get('/welcome', 

    (req, res) => {
        res.send(`Hola `);
    }
)
// --------------------- rutas en el index ----------------------------


//Static Files
app.use(express.static(path.join(__dirname, 'public'))); //Le decimos a express que carge la carpeta public para CSS, JS, images etc


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});