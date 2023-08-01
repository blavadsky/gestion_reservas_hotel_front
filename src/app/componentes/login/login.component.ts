import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, private authService: AuthenticationService){}

  public formLogIn = new FormGroup({
    contrasena: new FormControl('', Validators.required),
    correoElectronico: new FormControl('', Validators.required)
  })


  public iniciarSesion() {
    const email = this.formLogIn.value.correoElectronico ?? '';
    const password = this.formLogIn.value.contrasena ?? '';

    if (this.formLogIn.valid) {
      this.authService.login(email, password);
    } else
    alert("Contraseña incorrecta.");
    
  }

  ngOnInit(){}

   
}
