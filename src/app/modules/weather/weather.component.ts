import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '@shared/services/wheather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  location: string;
  chart: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location');
    this.weatherService.getWeatherData(this.location).subscribe((data) => {
      console.log(data);

      const temperatures = data.properties.periods.map(
        (period) => period.temperature
      );
      const times = data.properties.periods.map((period) => period.startTime);
      this.createChart(temperatures, times);
    });
  }

  createChart(temperatures: number[], times: string[]) {

  }
}
