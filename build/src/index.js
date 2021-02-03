"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Inicialización
const app = express_1.default();
// Settings
app.set('port', 2000);
// Middlewares
// Routes
//Static Files
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is running`);
});
