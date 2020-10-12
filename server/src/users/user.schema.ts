import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  companyDescription: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
