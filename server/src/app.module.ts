import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI || 'mongodb://localhost/getulia'
      }),
    }),
    CoreModule.register({
      language: 'pt',
      notUnderstandMessage: 'Não entendi o que quis dizer.',
      notKnowMessage: 'Não sei o que responder.',
      responseDelay: 1000,
    }),
    ProductsModule,
    UsersModule,
  ],
})
export class AppModule {}
