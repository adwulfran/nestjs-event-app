import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
    @Prop()
    title: string;

    @Prop()
    format: string;

    @Prop()
    date: Date;

    @Prop()
    time: Date;

    @Prop()
    location: string;

    @Prop()
    maxCapacity:number;

    @Prop()
    description?:string;

    @Prop()
    participants?:unknown[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
