import {
  ArrayMaxSize,
  ArrayMinSize,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ConnectorEntity } from './connector.entity';

export class ChargingStationEntity {
  @IsUUID()
  id: string;

  @ValidateIf((o) => !o.isPublic)
  @IsOptional()
  @IsString()
  title: string;

  @ValidateIf((o) => !o.isPublic)
  @IsOptional()
  @IsString()
  description: string;

  @ValidateIf((o) => !o.isPublic)
  @IsOptional()
  @IsString()
  address: string;

  // @ValidateNested({ each: true })
  // @Type(() => GeoCoordsEntity)
  @ValidateIf((o) => !o.isPublic)
  @IsOptional()
  @IsString()
  geocoords: string;

  @IsBoolean()
  isPublic: boolean;

  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(8)
  @Type(() => ConnectorEntity)
  connectorsList: ConnectorEntity[];
}
