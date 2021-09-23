import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '@modules/products/typeorm/repositories/ProductsRepositorie';
import RedisCache from '@shared/cache/RedisCache';

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
    const redisCache = new RedisCache();
    await redisCache.invalidate('api-vendas-PRODUCT_LIST');
    await pruductsRepository.remove(product);
  }
}

export default DeleteProductServices;
