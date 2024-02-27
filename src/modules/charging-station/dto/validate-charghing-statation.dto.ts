import { Connector } from '../entity/connector';

export class ValidateCharghingStationDto {
  id: number;
  title: string;
  description: string;
  address: string;
  geocoords: { latitude: number; longitude: number };
  isPublic: boolean;
  connectorsList: Connector[];
}
