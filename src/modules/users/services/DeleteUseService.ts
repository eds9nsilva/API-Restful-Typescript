import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
}

class DeleteUserServices {
  public async execute({ id }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.findOne(id);

    if (!users) {
      throw new AppError('Product not found.');
    }
    await usersRepository.remove(users);
  }
}

export default DeleteUserServices;
