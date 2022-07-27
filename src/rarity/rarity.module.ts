import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.Module';
import { RarityController } from './rarity.controller';
import { RarityService } from './rarity.service';

@Module({
  imports: [PrismaModule],
  controllers: [RarityController],
  providers: [RarityService]
})
export class RarityModule {}
