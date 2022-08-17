import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(userInput: Prisma.UserWhereUniqueInput, pass: string): Promise<any> {
    const user = await this.userService.findOne(userInput);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}