import { Module } from '@nestjs/common';
import { ChargingStationModule } from './modules/charging-station/charging-station.module';

@Module({
  imports: [ChargingStationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
