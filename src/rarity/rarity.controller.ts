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
import { RarityService } from './rarity.service';
import { Prisma } from '@prisma/client';
import { updateRarityDTO } from './dto/updateRarityDto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('rarity')
export class RarityController {
  constructor(private readonly rarityService: RarityService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRarityDto: Prisma.RarityCreateInput) {
    return this.rarityService.createRarity(createRarityDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.rarityService.findAll({});
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rarityService.findOne({ id: +id });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRarityDto: updateRarityDTO) {
    return this.rarityService.updateRarity({
      where: { id: +id },
      data: updateRarityDto,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rarityService.deleteRarity({ id: +id });
  }
}
