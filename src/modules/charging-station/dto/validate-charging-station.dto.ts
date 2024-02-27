import { ConnectorDto } from './connector.dto';

export class ValidateChargingStationDto {
  id: string;
  title: string;
  description: string;
  address: string;
  geocoords: string;
  isPublic: boolean;
  connectorsList: ConnectorDto[];
}
