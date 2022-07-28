import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { updateUserDto } from './dto/updateUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: UserModel) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({ id: +id });
  }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: updateUserDto) {
      return this.userService.updateUser({
        where: { id: +id },
        data: updateUserDto,
      });
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.userService.deleteUser({id: +id});
    }
}
