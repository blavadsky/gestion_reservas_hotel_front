import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { HotelDTO } from 'src/app/models/hotel';
import { HotelDataService } from 'src/app/servicios/hotel-data.service';
import { HotelService } from 'src/app/servicios/hotel.service';

interface CantidadReserva {
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  hoteles: HotelDTO[] = [];
  numeroPersonasControl = new FormControl(1);
  numeroHabitacionesControl = new FormControl(1);


  constructor(private hotelService: HotelService, private hotelDataService: HotelDataService,) {}

  ngOnInit() {
    this.hotelDataService.hoteles$.subscribe((hoteles: HotelDTO[]) => {
      this.hoteles = hoteles;
    });

//    this.obtenerHoteles();
  }



  // obtenerHoteles() {
  //   this.hotelService.listarHoteles().subscribe(
      
  //     (hoteles: any) => {
  //       this.hoteles = hoteles;
  //       console.log(hoteles);
  //     },
  //     (error) => {
  //       console.error('Error al obtener la lista de hoteles', error);
  //     }
  //   );
  // }


  @ViewChild('picker')
  dateRangePicker!: MatDateRangePicker<any>;

  reservar() {
    this.dateRangePicker.open();
  }

  cantidadReservas: CantidadReserva[] = [
    {value: 'personas', viewValue: 'Personas'},
    {value: 'habitaciones-1', viewValue: 'Habitaciones'},
  ];

}
