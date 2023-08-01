import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private urlUsuarios = environment.urlUsuarios;
  constructor(private http:HttpClient) { }

  public agregarUsuario(user:any) {
    return this.http.post(this.urlUsuarios + '/crearUsuario', user);
  }

  public obtenerUsuario(id: number) {
    return this.http.get(this.urlUsuarios + '/obtenerUsuario?numeroDocumento' + id)
  }

}
