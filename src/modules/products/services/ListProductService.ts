import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepositorie';

class ListProductServices {
  public async execute(): Promise<Product[]> {
    const pruductsRepository = getCustomRepository(ProductRepository);
    const products = pruductsRepository.find();
    return products;
  }
}

export default ListProductServices;
