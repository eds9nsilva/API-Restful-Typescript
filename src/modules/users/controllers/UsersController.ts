import { Request, Response } from 'express';
import CreateUserServices from '../services/CreateUserService';
import ListUserServices from '../services/ListUserService';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserServices();
    const users = await listUser.execute();
    return response.json(users);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUser = new CreateUserServices();

    const user = await createUser.execute({
      name,
      email,
      password,
    });
    return response.json(user);
  }
}
