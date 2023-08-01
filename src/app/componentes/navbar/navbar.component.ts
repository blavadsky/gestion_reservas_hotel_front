import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin = false;
  isLoggedIn = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateUserStatus();
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.updateUserStatus();
  }

  updateUserStatus() {
    const userRole = this.authService.getUsuarioRol();
    this.isAdmin = userRole === 'ADMIN';
    this.isLoggedIn = !!localStorage.getItem('auth_token');
    console.log('isAdmin:', this.isAdmin);
    console.log('isLoggedIn:', this.isLoggedIn);
  }


}
