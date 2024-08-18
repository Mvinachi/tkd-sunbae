import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faUserPlus = faUserPlus;
  faCircleUser = faCircleUser;

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
