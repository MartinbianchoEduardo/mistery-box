import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userInput: string, password: string): Promise<any> {
    console.log(userInput);
    const user = await this.authService.validateUser({username: userInput}, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}