import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoreModule } from './core/core.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI || 'mongodb://localhost/db'
      }),
    }),
    CoreModule.register({
      language: 'pt',
      notUnderstandMessage: 'Não entendi o que quis dizer.',
      notKnowMessage: 'Não sei o que responder.',
      responseDelay: 1000,
    }),
  ],
})
export class AppModule {}
