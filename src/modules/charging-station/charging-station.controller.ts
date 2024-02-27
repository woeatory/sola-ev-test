import { Body, Controller, Post } from '@nestjs/common';
import { ChargingStationService } from './charging-station.service';
import { ValidateCharghingStationDto } from './dto/validate-charghing-statation.dto';

@Controller('charging-station')
export class ChargingStationController {
  constructor(
    private readonly chargingStationService: ChargingStationService,
  ) {}

  @Post('validate')
  async validate(@Body() validateStationDto: ValidateCharghingStationDto) {
    await this.chargingStationService.validateCharghingStation(
      validateStationDto,
    );
  }
}
