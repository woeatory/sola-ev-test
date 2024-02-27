import { IsNumber, Max, Min } from 'class-validator';

export class GeoCoordsEntity {
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;
}
