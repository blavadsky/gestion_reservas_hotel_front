import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2'


interface TipoDocumento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public Iusuario: any = {};
  public usuarioObtenido?: Observable<any>;

  public formUsuario = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    // contrasena: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    numeroDocumentoUsuario: new FormControl('', Validators.required),
    telefonoUsuario: new FormControl('', Validators.required),
    correoElectronico: new FormControl('', Validators.required),
    tipoDocumento: new FormControl('', Validators.required)
  })

  
  constructor(private userService:UserService, private snack:MatSnackBar){}
  ngOnInit(): void {}

  public agregarUsuario() {
    let usuario = {
      nombreUsuario: this.formUsuario.get('nombreUsuario')?.value,
      // contrasena: this.formUsuario.get('contrasena')?.value,
      nombre: this.formUsuario.get('nombre')?.value,
      apellidos: this.formUsuario.get('apellidos')?.value,
      numeroDocumentoUsuario: this.formUsuario.get('numeroDocumentoUsuario')?.value,
      telefonoUsuario: this.formUsuario.get('telefonoUsuario')?.value,
      correoElectronico: this.formUsuario.get('correoElectronico')?.value,
      tipoDocumento: this.formUsuario.get('tipoDocumento')?.value,
    };

    this.userService.agregarUsuario(usuario).subscribe((respuesta) => {
      this.Iusuario = respuesta;
      Swal.fire('Usuario guardado', 'Usuario registrado exitosamente en el sistema', 'success');
    }, (error) => {
      this.snack.open('El usuario no ha sido creado con éxito.','Aceptar', {
        duration : 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }) 
  }

  public obtenerUsuario() {
    this.userService.obtenerUsuario(1).subscribe(
      (respuesta) =>{
        alert('Usuario guardado con exito');
        console.log(respuesta);
      },
      (error) => {
        console.log(error.error.httpCodeMessage);
        alert('ha ocurrido un error en el sistema');
      }
    );
  }


  tipoDocumentos: TipoDocumento[] = [
    {value: 'CEDULA_CIUDADANIA', viewValue: 'Cédula de ciudadanía'},
    {value: 'CEDULA_EXTRANJERIA', viewValue: 'Cédula de extranjería'},
    {value: 'NIT', viewValue: 'NIT'},
    {value: 'PASAPORTE', viewValue: 'Pasaporte'}
  ];

}
