import { Router, Request, Response } from 'express';
import { clientsController } from '../controllers/clients';

class ClientsRoutes {

    public router: Router = Router();
    
    constructor(){
        this.router.get('/', clientsController.index);
        this.router.post('/add', clientsController.create);
    }

}

const clientsRoutes = new ClientsRoutes();
export default clientsRoutes.router;