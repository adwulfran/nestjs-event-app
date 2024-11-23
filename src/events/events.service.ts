import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = await this.eventModel.create(createEventDto);
    return createdEvent;
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    return this.eventModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedEvent = await this.eventModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedEvent;
  }
}
