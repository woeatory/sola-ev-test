import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ChargingStationService } from './charging-station.service';
import { ValidateChargingStationDto } from './dto/validate-charging-station.dto';

@Controller('charging-station')
export class ChargingStationController {
  constructor(
    private readonly chargingStationService: ChargingStationService,
  ) {}

  @Post('validate')
  @HttpCode(200)
  async validate(@Body() validateStationDto: ValidateChargingStationDto) {
    const response =
      await this.chargingStationService.validateChargingStation(
        validateStationDto,
      );
    if (response.length > 0) {
      throw new HttpException(response, HttpStatus.BAD_REQUEST);
    }
  }
}
