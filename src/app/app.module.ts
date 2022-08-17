import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { WeaponModule } from 'src/weapon/weapon.module';

import { RarityModule } from 'src/rarity/rarity.module';
import { AppController } from './app.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UserModule, WeaponModule, RarityModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
