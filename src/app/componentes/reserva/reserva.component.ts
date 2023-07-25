import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { HotelDTO } from 'src/app/models/hotel';
import { HotelService } from 'src/app/servicios/hotel.service';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  hoteles: HotelDTO[] = [];
  numeroPersonasControl = new FormControl(1);
  numeroHabitacionesControl = new FormControl(1);

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.obtenerHoteles();
  }

  obtenerHoteles() {
    this.hotelService.listarHoteles().subscribe(
      (hoteles: any) => {
        this.hoteles = hoteles;
      },
      (error) => {
        console.error('Error al obtener la lista de hoteles', error);
      }
    );
  }


  @ViewChild('picker')
  dateRangePicker!: MatDateRangePicker<any>;

  reservar() {
    // Mostrar el calendario al hacer clic en el botón "Reservar"
    this.dateRangePicker.open();
  }

}
