import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Declare Injectable as Service
 */
@Injectable()
export class CommonsService {
  constructor(private router: Router) {}
  /**
   * Navigate to internal
   * @param url
   */
  navigate(url: string): void {
    this.router.navigate(['/' + url]);
  }
}
