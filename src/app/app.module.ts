import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { WeaponModule } from 'src/weapon/weapon.module';

import { RarityModule } from 'src/rarity/rarity.module';

@Module({
  imports: [UserModule, WeaponModule, RarityModule],
  controllers: [],
})
export class AppModule {}
