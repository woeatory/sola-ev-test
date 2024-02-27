import { IsInt, Min, IsUUID, Max, IsIn } from 'class-validator';

// const types = {
//   CCS: 'CCS',
//   CHAdeMO: 'CHAdeMO',
//   Type1: 'Type1',
//   Type2: 'Type2',
// } as const;

// type ConnectorType = (typeof types)[keyof typeof types];

export class ConnectorEntity {
  @IsUUID()
  id: string;
  @IsIn(['CCS', 'CHAdeMO', 'Type1', 'Type2'])
  type: string;

  @IsInt()
  @Min(0)
  @Max(10)
  maximumPowerKW: number;
}
