import { IsDefined, IsNotEmpty, IsString, validate, } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  readonly age: number;
  readonly breed: string;
}
