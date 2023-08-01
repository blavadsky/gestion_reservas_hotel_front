import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HotelDTO } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {
  private hotelesSubject: BehaviorSubject<HotelDTO[]> = new BehaviorSubject<HotelDTO[]>([]);
  public hoteles$: Observable<HotelDTO[]> = this.hotelesSubject.asObservable();

  constructor() {}

  actualizarHoteles(hoteles: HotelDTO[]) {
    this.hotelesSubject.next(hoteles);
  }
}
