import { Request, Response } from 'express';
import CreateSessionServices from '../services/CreateSessionService';
import { classToClass } from 'class-transformer';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = new CreateSessionServices();

    const user = await createSession.execute({
      email,
      password,
    });
    return response.json(classToClass(user));
  }
}
