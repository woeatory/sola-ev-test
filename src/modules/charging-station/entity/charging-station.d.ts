import { Connector } from './connector';

export class ChargingStation {
  constructor(
    id: string,
    title: string,
    description: string,
    address: string,
    geocoords: string,
    isPublic: boolean,
    connectorsList: Connector[],
  );
}
