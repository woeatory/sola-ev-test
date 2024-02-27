import { IsNumber, Max, Min } from 'class-validator';

export class GeoCoordsDto {
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;
  @Min(-180)
  @Max(180)
  @IsNumber()
  longitude: number;
}
