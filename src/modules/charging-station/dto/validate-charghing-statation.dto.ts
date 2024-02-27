import { IsBoolean, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ConnectorDto } from './connector.dto';
import { GeoCoordsDto } from './geocoords.dto';

export class ValidateCharghingStationDto {
  @IsUUID()
  id: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  address: string;
  @ValidateNested({ each: true })
  @Type(() => GeoCoordsDto)
  geocoords: GeoCoordsDto;
  @IsBoolean()
  isPublic: boolean;
  @ValidateNested({ each: true })
  @Type(() => ConnectorDto)
  connectorsList: ConnectorDto[];
}
