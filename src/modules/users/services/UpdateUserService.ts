import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserServices {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.findOne(id);

    if (!users) {
      throw new AppError('User not found.');
    }
    const userExists = await usersRepository.findByEmail(email);
    if (userExists) {
      throw new AppError('There is already one user with this email');
    }

    users.name = name;
    users.email = email;
    users.password = password;
    await usersRepository.save(users);
    return users;
  }
}

export default UpdateUserServices;
