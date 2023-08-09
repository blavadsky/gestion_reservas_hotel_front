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

  // public obtenerReservasPorUsuario(correoElectronico: string) {
  //   this.http.get(this.urlReservas + '/obtenerReservasPorUsuario/' + correoElectronico);
  // }

  public obtenerReservasPorUsuario(correoElectronico: string): Observable<ReservaDTO[]> {
    return this.http.get<ReservaDTO[]>(this.urlReservas + '/obtenerReservasPorUsuario/' + correoElectronico);
  }
  
  actualizarReservas(reservas: ReservaDTO[]) {
    console.log("Desde reserva Service");
    this.reservasSubject.next(reservas);
  }

}
