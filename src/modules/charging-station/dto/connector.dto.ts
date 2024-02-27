import { IsInt, IsIn, Min, IsUUID, Max } from 'class-validator';

export class ConnectorDto {
  @IsUUID()
  id: string;
  @IsIn(['CCS', 'CHAdeMO', 'Type1', 'Type2'])
  type: string;

  @IsInt()
  @Min(0)
  @Max(10)
  maximumPowerKW: number;
}
