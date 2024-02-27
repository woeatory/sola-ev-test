const types = {
  CSS: 'CSS',
  CHAdeMO: 'CHAdeMO',
  Type1: 'Type1',
  Type2: 'Type2',
} as const;

type ConnectorType = (typeof types)[keyof typeof types];

export class Connector {
  constructor(id: number, type: ConnectorType, maximumPowerKW: number);
}
