import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
}

class ShowUserServices {
  public async execute({ id }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.findOne(id);

    if (!users) {
      throw new AppError('Product not found.');
    }

    return users;
  }
}

export default ShowUserServices;
