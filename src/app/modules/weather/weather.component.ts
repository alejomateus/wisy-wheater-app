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
  lineChartData: Array<any> = [];
  lineChartLabels: string[] = [];
  lineChartOptions: any = {
    responsive: true,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0,
        to: 0.1,
        loop: true,
      },
    },
    plugins: {
      title: {
          display: true,
          text: 'Weather Chart',
          font: {
            size: 30
          }
      }
  }
  };
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location');
    this.weatherService.getWeatherData(this.location).subscribe((data) => {
      const temperatures = data.properties.periods.map(
        (period) => period.temperature
      );
      const times = data.properties.periods.map((period) => period.name);
      this.createChart(temperatures, times);
    });
  }

  createChart(temperatures: number[], times: string[]) {
    this.lineChartLabels = times;
    this.lineChartData.push({
      data: temperatures,
      label: 'temperatures',
      fill: true,
      borderColor: 'black',
      backgroundColor: 'green',
      pointBackgroundColor: 'red',
    });
  }
}
