import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { Weapons as WeaponModel } from '@prisma/client';
import { createWeaponDTO } from './dto/createWeaponDTO';

@Controller('weapons')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Post()
  create(@Body() createWeaponDto: createWeaponDTO) {
    return this.weaponService.createWeapon(createWeaponDto);
  }

  @Get()
  findAll() {
    return this.weaponService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.weaponService.findOne({ id: +id });
  }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //     return this.userService.update(+id, updateUserDto);
  //   }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.weaponService.deleteWeapon({id: +id});
    }
}
