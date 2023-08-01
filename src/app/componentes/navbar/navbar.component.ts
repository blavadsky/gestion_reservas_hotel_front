import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(private authService: AuthenticationService) {}

  // ngOnInit(): void {
  //   this.isAdmin = this.authService.getRole() === 'ADMIN'; // Ajusta el método para obtener el tipo de usuario
  //   this.isLoggedIn = this.authService.isAuthenticated();
  // }
}
