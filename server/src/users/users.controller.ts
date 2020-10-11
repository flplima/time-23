import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  @Post()
  async create(
    @Body() data: any,
  ) {
    const user = new this.userModel();
    user.name = data.name;
    user.email = data.email;
    user.companyName = data.companyName;
    user.companyDescription = data.companyDescription;
    await user.save();
    return user;
  }
}
