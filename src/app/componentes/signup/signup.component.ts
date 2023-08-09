import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

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
  // public Iusuario: any = {};
  // public usuarioObtenido?: Observable<any>;

  formUsuario: FormGroup;
  tipoDocumentos: TipoDocumento[] = [
    {value: 'CEDULA_CIUDADANIA', viewValue: 'Cédula de ciudadanía'},
    {value: 'CEDULA_EXTRANJERIA', viewValue: 'Cédula de extranjería'},
    {value: 'NIT', viewValue: 'NIT'},
    {value: 'PASAPORTE', viewValue: 'Pasaporte'}
  ];

  constructor(private formBuilder: FormBuilder, private userService:UserService, private snack:MatSnackBar, private authenticationService: AuthenticationService){
    this.formUsuario = this.formBuilder.group({
      correoElectronico: '',
      contrasena: '',
      nombre: '',
      apellidos: '',
      telefono: '',
      numeroDocumento: '',
      tipoDocumento: ''
    });
  }
  ngOnInit(): void {}

  signUp() {
    if (this.formUsuario.valid) {
      const datosSignUp = this.formUsuario.value;
      this.authenticationService.signUp(datosSignUp).subscribe(
        (response) => {
          // Usuario registrado exitosamente, puedes hacer algo con la respuesta si es necesario
          console.log('Usuario registrado:', response);
        },
        (error) => {
          // Manejo de errores en caso de que el registro falle
          console.error('Error al registrar el usuario:', error);
        }
      );
    } else {
      console.warn('Formulario no válido. Revise los campos.');
    }
  }

  // public formUsuario = new FormGroup({
  //   contrasena: new FormControl('', Validators.required),
  //   nombre: new FormControl('', Validators.required),
  //   apellidos: new FormControl('', Validators.required),
  //   numeroDocumento: new FormControl('', Validators.required),
  //   telefono: new FormControl('', Validators.required),
  //   correoElectronico: new FormControl('', Validators.required),
  //   tipoDocumento: new FormControl('', Validators.required)
  // })

  

  // public signUp() {
  //   if (this.formUsuario.valid) {
  //     const usuario = {
  //       contrasena: this.formUsuario.get('contrasena')!.value,
  //       nombre: this.formUsuario.get('nombre')!.value,
  //       apellidos: this.formUsuario.get('apellidos')!.value,
  //       numeroDocumento: this.formUsuario.get('numeroDocumento')!.value,
  //       telefono: this.formUsuario.get('telefono')!.value,
  //       correoElectronico: this.formUsuario.get('correoElectronico')!.value,
  //       tipoDocumento: this.formUsuario.get('tipoDocumento')!.value,
  //     };
  
  //     this.authenticationService.signUp(usuario);
  //     console.log(usuario);
  //   }
  // }  
      // .subscribe((respuesta) => {
    //     this.Iusuario = respuesta;
    //     Swal.fire('Usuario guardado', 'Usuario registrado exitosamente en el sistema', 'success')
    //     .then(()=> {
    //       this.formUsuario.reset();
    //     });
    //   }, (error) => {
    //     this.snack.open('El usuario no ha sido creado con éxito.','Aceptar', {
    //       duration : 2000,
    //       verticalPosition: 'top',
    //       horizontalPosition: 'center'
    //     });
    //   });
    // } else {
    //   // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    // }

  

  // public agregarUsuario() {
  //   let usuario = {
  //     contrasena: this.formUsuario.get('contrasena')?.value,
  //     nombre: this.formUsuario.get('nombre')?.value,
  //     apellidos: this.formUsuario.get('apellidos')?.value,
  //     numeroDocumento: this.formUsuario.get('numeroDocumento')?.value,
  //     telefono: this.formUsuario.get('telefono')?.value,
  //     correoElectronico: this.formUsuario.get('correoElectronico')?.value,
  //     tipoDocumento: this.formUsuario.get('tipoDocumento')?.value,
  //   };

  //   this.userService.agregarUsuario(usuario).subscribe((respuesta) => {
  //     this.Iusuario = respuesta;
  //     Swal.fire('Usuario guardado', 'Usuario registrado exitosamente en el sistema', 'success')
  //     .then(()=> {
  //       this.formUsuario.reset();
  //     })
  //   }, (error) => {
  //     this.snack.open('El usuario no ha sido creado con éxito.','Aceptar', {
  //       duration : 2000,
  //       verticalPosition: 'top',
  //       horizontalPosition: 'center'
  //     });
  //   }) 
  // }

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



}
