import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepositorie';

interface IRequest {
  id: string;
}

class DeleteProductServices {
  public async execute({ id }: IRequest): Promise<void> {
    const pruductsRepository = getCustomRepository(ProductRepository);
    const product = await pruductsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }
    await pruductsRepository.remove(product);
  }
}

export default DeleteProductServices;
