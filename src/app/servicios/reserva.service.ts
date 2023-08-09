import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ReservaRequest } from '../models/reservaRequest';
import { ReservaDTO } from '../models/reservaDTO';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private urlReservas = environment.urlReservas;
  private reservasSubject: BehaviorSubject<ReservaDTO[]> = new BehaviorSubject<ReservaDTO[]>([]);
  public reservas$: Observable<ReservaDTO[]> = this.reservasSubject.asObservable();

  constructor(private http:HttpClient) { }



  public crearReserva(reservaRequest: ReservaRequest) {
    console.log("Mensaje dese el serviicio", reservaRequest);
    return this.http.post(this.urlReservas + '/crearReserva', reservaRequest);
  }

  public obtenerReservasPorUsuario(correoElectronico: string): Observable<ReservaDTO[]> {
    return this.http.get<ReservaDTO[]>(this.urlReservas + '/obtenerReservasPorUsuario/' + correoElectronico);
  }
  
  public eliminarReserva(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlReservas}/eliminarReserva?id=${id}`);
  }

  public actualizarReserva(reservaRequest: ReservaRequest) {
    return this.http.put(this.urlReservas + '/actualizarReserva', reservaRequest);
  }
  
}
