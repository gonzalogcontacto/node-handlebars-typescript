import { Router } from 'express';
import { clientsController } from '../controllers/clients';
import { indexController } from '../controllers/index';
import { User } from '../models/user';


const router: Router = Router();

// Ejemplo de Routes en el index
let products = [
    { id: 1, name: 'TV plana 32 "' },
    { id: 2, name: 'Macbook Pro 16 "' }
];

router.get('/:id', (req, res) => {
    res.send(products.filter(item => item.id === Number(req.params.id)));
    //res.send(products.reduce((prev, current) => prev || current.id === Number(req.params.id) ? current : {id: 0, name: ''}));
});

router.get('/', clientsController.renderFormBook);

export default router;