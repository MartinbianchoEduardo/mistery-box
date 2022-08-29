import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { createWeaponDTO } from './dto/createWeaponDTO';
import { updateWeaponDto } from './dto/updateWeaponDto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('weapons')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createWeaponDto: createWeaponDTO) {
    return this.weaponService.createWeapon(createWeaponDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.weaponService.findAll({});
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.weaponService.findOne({ id: +id });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeaponDto: updateWeaponDto) {
    return this.weaponService.updateWeapon({
      where: { id: +id },
      data: updateWeaponDto,
    })

  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weaponService.deleteWeapon({ id: +id });
  }
}
