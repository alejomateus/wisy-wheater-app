import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonsService } from './services/commons.service';
import { WeatherService } from './services/wheather.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [CommonsService, WeatherService]
})
export class SharedModule {}
