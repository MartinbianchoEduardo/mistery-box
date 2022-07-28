import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma, Weapons, Rarity } from '@prisma/client';
import { createRarityDTO } from './dto/createRarityDTO';

@Injectable()
export class RarityService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    rarityWhereUniqueInput: Prisma.RarityWhereUniqueInput,
  ): Promise<Rarity | null> {
    return this.prisma.rarity.findUnique({
      where: rarityWhereUniqueInput,
    });
  }

  async createRarity(data: Prisma.RarityCreateInput): Promise<Rarity> {
    return this.prisma.rarity.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Rarity[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.rarity.findMany({
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async updateRarity(params: {
    where: Prisma.RarityWhereUniqueInput;
    data: Prisma.RarityUpdateInput;
  }): Promise<Rarity> {
    const { where, data } = params;
    return this.prisma.rarity.update({
      data,
      where,
    });
  }

  async deleteRarity(where: Prisma.RarityWhereUniqueInput): Promise<Rarity> {
    return this.prisma.rarity.delete({
      where,
    });
  }
}
