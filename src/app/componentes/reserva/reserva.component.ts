import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { HotelDTO } from 'src/app/models/hotel';
import { ReservaRequest } from 'src/app/models/reservaRequest';
import { HotelDataService } from 'src/app/servicios/hotel-data.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { ReservaService } from 'src/app/servicios/reserva.service';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';


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
  fechaForm!: FormGroup;
  hotelId: any;

  constructor(private reservaService: ReservaService,private hotelService: HotelService, private hotelDataService: HotelDataService, private formBuilder: FormBuilder, private http: HttpClient) {}


  ngOnInit() {
    this.hotelDataService.hoteles$.subscribe((hoteles: HotelDTO[]) => {
      this.hoteles = hoteles;
      this.fechaForm = this.formBuilder.group({
        fechaInicio: '',
        fechaFin: '',
        capacidadHotel: 1,
        hotelId: '',
        usuario: ''
      });
    }); 
    this.obtenerHoteles();
    
    const token = localStorage.getItem('auth_token');
  
  if (token) {
    const decodedToken: any = jwt_decode(token);
    
    this.fechaForm.get('usuario')?.setValue(decodedToken.sub);
  }

  }

  public crearReserva() {
    if (this.fechaForm.valid) {
      const reservaRequest = {
        hotelId: this.hotelId || '',
        fechaInicio: this.fechaForm.get('fechaInicio')?.value.toISOString().split('T')[0],
        fechaFin: this.fechaForm.get('fechaFin')?.value.toISOString().split('T')[0],
        capacidadHotel: this.fechaForm.get('capacidadHotel')?.value || '',
        usuario: this.fechaForm.get('usuario')?.value || ''
      }
      this.reservaService.crearReserva(reservaRequest).subscribe(
        (response) => {
          console.log('Reserva creada:', response);
        },
        (error) => {
          console.error('Error al crear reserva:', error);
        }
      );
    } else {
      console.warn('Formulario no válido. Revise los campos.');
    }
  }


  reservar(hotelId: any) {
    this.hotelId = hotelId;
    this.dateRangePicker.open();
  }

  
  obtenerHoteles() {
    this.hotelService.listarHoteles().subscribe(
      
      (hoteles: any) => {
        this.hoteles = hoteles;
        console.log("Hoteles creados: ", hoteles);
      },
      (error) => {
        console.error('Error al obtener la lista de hoteles', error);
      }
    );
  }


  @ViewChild('picker')
  dateRangePicker!: MatDateRangePicker<any>;


  cantidadReservas: CantidadReserva[] = [
    {value: 'personas', viewValue: 'Personas'},
    {value: 'habitaciones-1', viewValue: 'Habitaciones'},
  ];

}
