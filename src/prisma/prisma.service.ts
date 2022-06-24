import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgres://postgres:ef9f61827a9f6ed3d93e21a7673b29a1@189.126.105.68:706/gabriel',
        },
      },
    });
  }
}
