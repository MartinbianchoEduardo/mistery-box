import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma, Weapons } from '@prisma/client';
import { createWeaponDTO } from './dto/createWeaponDTO';

@Injectable()
export class WeaponService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    weaponWhereUniqueInput: Prisma.WeaponsWhereUniqueInput,
  ): Promise<Weapons | null> {
    return this.prisma.weapons.findUnique({
      where: weaponWhereUniqueInput,
    });
  }

  async createWeapon(data: createWeaponDTO): Promise<Weapons> {
    return this.prisma.weapons.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Weapons[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.weapons.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

//   async updateUser(params: {
//     where: Prisma.UserWhereUniqueInput;
//     data: Prisma.UserUpdateInput;
//   }): Promise<User> {
//     const { where, data } = params;
//     return this.prisma.user.update({
//       data,
//       where,
//     });
//   }

//   async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
//     return this.prisma.user.delete({
//       where,
//     });
//   }
}
