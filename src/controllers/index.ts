import {Request, Response} from 'express';

class IndexController {
    
    public index (req : Request, res: Response) {
        res.send('Hola!');
    }

    public show (req : Request, res: Response) {
        res.render('index', { name: 'FSB!'});
    }
}

export const indexController = new IndexController();