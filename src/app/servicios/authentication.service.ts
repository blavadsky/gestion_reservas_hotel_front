import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment.prod';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface DatosSignUp {
  contrasena: string | null;
  nombre: string | null;
  apellidos: string | null;
  numeroDocumento: string | null;
  telefono: string | null;
  correoElectronico: string | null;
  tipoDocumento: string | null;
}


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private urlAuth = environment.urlAuth;
  token: any;
  
  private authTokenKey = 'auth_token'; 

  constructor(private http: HttpClient, private router: Router) { }

  public signUp(datosSignUp : DatosSignUp) {
    console.log("Desde el servicio auth" , datosSignUp);
    return this.http.post(this.urlAuth + '/signup', datosSignUp);
  }

  login(email: string, password: string) {
    this.http.post(`${this.urlAuth}/signin`, { correoElectronico: email, contrasena: password})
      .subscribe((resp: any) => {
        this.router.navigate(['reserva']);
        localStorage.setItem('auth_token', resp.token);
        console.log("informacion de token "+ resp.token);
        localStorage.setItem('user_type', resp.type);
      });  
  }

  getUsuarioRol(): string | null {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.rol;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_type');
    this.router.navigate(['/login']);
  }
  

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  // Método para obtener el token almacenado
  getToken() {
    return localStorage.getItem(this.authTokenKey);
  }

  // Método para verificar si el usuario está autenticado (opcional)
  isAuthenticated() {
    const authToken = this.getToken();
    // Puedes implementar lógica adicional aquí para verificar si el token es válido o ha expirado
    return !!authToken;
  }

  // Función para validar un token JWT
  // Función para validar un token JWT
  validarToken(token: string): boolean {
    try {
      // Decodificar el token usando jwt-decode
      const decodedToken: any = jwt_decode(token);

      // Puedes realizar acciones adicionales según tus necesidades, como comprobar la expiración del token o los datos del usuario
      console.log('Token válido:', decodedToken);
      return true;
    } catch (error) {
      // Si el token no es válido, capturaremos el error aquí
      console.error('Token inválido:', error);
      return false;
    }
  }

}
