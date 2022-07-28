import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RarityService } from './rarity.service';
import { Prisma } from '@prisma/client';
import { updateRarityDTO } from './dto/updateRarityDto';

@Controller('rarity')
export class RarityController {
  constructor(private readonly rarityService: RarityService) {}

  @Post()
  create(@Body() createRarityDto: Prisma.RarityCreateInput) {
    return this.rarityService.createRarity(createRarityDto);
  }

  @Get()
  findAll() {
    return this.rarityService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rarityService.findOne({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRarityDto: updateRarityDTO) {
    return this.rarityService.updateRarity({
      where: { id: +id },
      data: updateRarityDto,
    });
  }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.rarityService.deleteRarity({id: +id});
    }
}
