import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  faUserPlus = faUserPlus;
  faCircleUser = faCircleUser;
  user: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user') ? sessionStorage.getItem('user')! : '';
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  deleteUser() {
    sessionStorage.clear()
    this.router.navigate(['./']).then(() => {
      window.location.reload();
    })
  }

  isSidebarOpen = false;
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

    closeSidebar() {
      this.isSidebarOpen = false;
    }
}
