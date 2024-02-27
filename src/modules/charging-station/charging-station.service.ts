import { Injectable } from '@nestjs/common';
import { ValidateCharghingStationDto } from './dto/validate-charghing-statation.dto';

@Injectable()
export class ChargingStationService {
  async validateCharghingStation(
    validateStationDto: ValidateCharghingStationDto,
  ) {
    console.dir(validateStationDto, { depth: null });
  }
}
