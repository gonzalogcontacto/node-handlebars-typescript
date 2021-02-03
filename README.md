# (Handlebars Lessons) Node Handlebars project with Express, Handlebars and Sequelize. Typescript Based.
Proyecto educativo con node, desarrollado con typescript en el que hacemos uso de distintas tecnologías y herramientas para obtener un proyecto con un patrón MVC centrándonos en el uso de handlebars como motor de plantillas. (Herencia, traspaso de variables, renderizado y configuración) 

# Arquitectura del proyecto
El proyecto está orgaizado con un archivo src/index.ts que es el encargado de levantar el servidor con Express y es el encargado de la carga del resto de archivos en los que separamos nuestra lógica:

- Controllers: es la carpeta en la que almacenamos las clases que contendrán los métodos que realizarán la lógica de los recursos URL que se soluciten en nuestro servidor.
- Routes: es la carpeta en la que alojamos las rutas de nuestra aplicación, las organizamos por unidades lógicas o módulos de nuestra aplicación. Cada ruta hace uso del correspondiente método de su correspondiete controlador.
- Models: es la carpeta en la que definimos los modelos de nuestra BBDD, en este caso con Sequelize como ORM.
- Views: En este proyecto hacermos uso de vistas propias para gestionar un patrón MVC, en el cual usamos Handlebars como view engine.
- Migrations: En esta carpeta mantenemos gracias a sequelize una trazabilidad de nuestros cambios estructurales en BBDD con un sistema de migraciones robusto y versionable.

# Lanzamiento y compilado
Tenemos disponibles los siguientes comandos desde la raiz de nuestro proyecto:

- npm run dev: Nos lanza la aplicación sin necesidad de compilar TS a JS y además detecta los cambios de forma automática gracias al módulo ts-node y nodemon.
- npm run build: Realiza la compilación que tenemos previamente configurada en tsconfig.json.
- npm run start: Nos lanza la aplicación ya compilada de TS a JS para que podamos testar la aplicación que será desplegada en un entorno de producción real.

