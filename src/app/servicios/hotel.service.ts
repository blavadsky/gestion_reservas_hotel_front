import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private urlUsuarios = environment.urlHoteles;
  constructor(private http:HttpClient) { }

  public listarHoteles() {
    return this.http.get(this.urlUsuarios + '/listarHoteles')
  }

}
