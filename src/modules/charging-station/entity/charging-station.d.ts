import { Connector } from './connector';

export class ChargingStation {
  constructor(
    id: number,
    title: string,
    description: string,
    address: string,
    geocoords: string,
    isPublic: boolean,
    connectorsList: Connector[],
  );
}
