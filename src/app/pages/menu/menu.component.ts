import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(public router: Router) {}

  navigateTorneo () {
    this.router.navigate(['/brackets']);
  }

  navigateLader() {
    this.router.navigate(['/leaderboard']);
  }

}
