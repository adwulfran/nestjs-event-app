import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/test'),
    CatsModule,
    EventsModule
  ],
})
export class AppModule { }
