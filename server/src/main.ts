import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

NestFactory.create(AppModule).then(app => {
  app.enableCors();
  app.listen(3002);
});
