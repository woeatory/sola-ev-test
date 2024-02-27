import { Injectable } from '@nestjs/common';
import { ValidateChargingStationDto } from './dto/validate-charging-station.dto';

@Injectable()
export class ChargingStationService {
  async validateChargingStation(
    validateStationDto: ValidateChargingStationDto,
  ) {
    console.dir(validateStationDto, { depth: null });
  }
}
