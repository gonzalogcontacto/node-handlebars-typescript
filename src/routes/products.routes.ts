import { Router, Request, Response } from 'express';

class ProductsRoutes {
    public router: Router = Router();
    private products = [
        { id: 1, title: 'TV plana 32"'},
        { id: 2, title: 'XBOX'}
    ];

    constructor(){
        
        this.router.get('/', (req: Request, res: Response) => {            
            res.send(this.products);
        });

        this.router.get('/:productId', (req: Request, res: Response) => {

            let product = this.products.filter(obj => obj.id === Number(req.params.productId))
            res.send(product);

        });
    }
}
const clientsRoutes = new ProductsRoutes();
export default clientsRoutes.router;
