import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';

export default class RedisCache {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }
  public async save(Key: string, value: any): Promise<void> {
    await this.client.set(Key, JSON.stringify(value));
  }

  public async recover<T>(Key: string): Promise<T | null> {
    const data = await this.client.get(Key);
    if (!data) {
      return null;
    }

    const parseData = JSON.parse(data) as T;

    return parseData;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }
}