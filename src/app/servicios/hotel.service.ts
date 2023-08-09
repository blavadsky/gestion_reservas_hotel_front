import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { HotelDTO } from '../models/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  private urlHoteles = environment.urlHoteles;
  constructor(private http:HttpClient) { }

  public listarHoteles() {
    return this.http.get(this.urlHoteles + '/listarHoteles')
  }

  public agregarHotel(hotelData: HotelDTO) {
    console.log("Informacion del servicio", hotelData)
    return this.http.post(this.urlHoteles + '/crearHotel', hotelData);
  }

  public eliminarHotel(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlHoteles}/eliminarHotel?id=${id}`)
  }

  public actualizarHotel(hotelData: HotelDTO) {
    return this.http.put(this.urlHoteles + '/actualizarHotel', hotelData)
  }
}
