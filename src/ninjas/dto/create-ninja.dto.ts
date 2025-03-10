import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3)
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(['stars', 'nunchuks'], {
    message: 'weapon must be either stars or nunchuks',
  })
  weapon: 'stars' | 'nunchuks';
}
