import { Request, Response } from 'express';
import { User, UserInterface } from '../models/user';

class ClientsController {

    public index(req: Request, res: Response) {
        User.findAll<User>({})
        .then((nodes: Array<User>) => res.json(nodes))
        .catch((err: Error) => res.status(500).json(err));
    }

    public renderFormBook(req: Request, res: Response) {
        User.findAll<User>({})
        .then((nodes: Array<User>) => res.json(nodes))
        .catch((err: Error) => res.status(500).json(err));
    }

    public create(req: Request, res: Response) {
        const params: UserInterface = req.body;
    
        User.create<User>(params)
          .then((node: User) => res.status(201).json(node))
          .catch((err: Error) => res.status(500).json(err));
      }

}

export const clientsController = new ClientsController();