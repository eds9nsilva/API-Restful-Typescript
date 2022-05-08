import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUserServices from '../../../services/CreateUserService';
import DeleteUserServices from '../../../services/DeleteUseService';
import ListUserServices from '../../../services/ListUserService';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserServices();
    const users = await listUser.execute();
    return response.json(classToClass(users));
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUser = new CreateUserServices();

    const user = await createUser.execute({
      name,
      email,
      password,
    });
    return response.json(classToClass(user));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUser = new DeleteUserServices();
    await deleteUser.execute({ id });
    return response.json([]);
  }
}
