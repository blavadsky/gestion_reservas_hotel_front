import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { HotelDTO } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  private urlUsuarios = environment.urlHoteles;
  constructor(private http:HttpClient) { }

  public listarHoteles() {
    return this.http.get(this.urlUsuarios + '/listarHoteles')
  }

  public agregarHotel(hotelData: HotelDTO) {
    console.log("Informacion del servicio", hotelData)
    return this.http.post(this.urlUsuarios + '/crearHotel', hotelData);
  }
}
