import { IsDate, IsNotEmpty, IsString, } from 'class-validator';
import { IsFutureDate } from './isFuturDate';
import { Type } from 'class-transformer';

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly format: 'physical' | 'online' | 'hybrid'

    @IsDate()
    @Type(() => Date)
    @IsFutureDate({
        message: 'Event must be in future',
    })
    readonly date: Date;


}


