import { Injectable } from '@nestjs/common';
import { ValidateChargingStationDto } from './dto/validate-charging-station.dto';
import { plainToClass } from 'class-transformer';
import { ChargingStationEntity } from './entity/charging-station.entity';
import { validate } from 'class-validator';

@Injectable()
export class ChargingStationService {
  async validateChargingStation(
    validateStationDto: ValidateChargingStationDto,
  ) {
    const chargingStation = plainToClass(
      ChargingStationEntity,
      validateStationDto,
    );
    return await validate(chargingStation);
  }
}
