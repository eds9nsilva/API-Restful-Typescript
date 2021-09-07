import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepositorie';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductServices {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const pruductsRepository = getCustomRepository(ProductRepository);
    const productExists = await pruductsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }

    const product = pruductsRepository.create({
      name,
      price,
      quantity,
    });

    await pruductsRepository.save(product);
    return product;
  }
}

export default CreateProductServices;
