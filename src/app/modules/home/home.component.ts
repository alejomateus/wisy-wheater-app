import { Component } from '@angular/core';
import { CommonsService } from '@shared/services/commons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private commonsService: CommonsService
  ) {}
  changeLocation(location: string) {
    this.commonsService.navigate(`${location}`)
  }
}
