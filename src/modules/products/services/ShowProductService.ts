import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../infra/typeorm/entities/Product';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductsRepositorie';

interface IRequest {
  id: string;
}

class ShowProductServices {
  public async execute({ id }: IRequest): Promise<Product> {
    const pruductsRepository = getCustomRepository(ProductRepository);
    const product = await pruductsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    return product;
  }
}

export default ShowProductServices;
