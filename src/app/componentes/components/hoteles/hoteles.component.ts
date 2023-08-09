import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HotelDTO } from 'src/app/models/hotel';
import { HotelDataService } from 'src/app/servicios/hotel-data.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent {

  public formHotel = new FormGroup({
    idHotel: new FormControl('', Validators.required),
    nombreHotel: new FormControl('', Validators.required),
    telefonoHotel: new FormControl('', Validators.required),
    direccionCorreoHotel: new FormControl('', Validators.required),
    numeroHabitacionesHotel: new FormControl('', Validators.required)
  })
  
  constructor(private hotelService:HotelService, private hotelDataService: HotelDataService, private snack:MatSnackBar){}
  ngOnInit(): void {}

  public agregarHotel() {
    if (this.formHotel.valid) {
    const hotelData = {
      idHotel: this.formHotel.get('idHotel')?.value || '',
      nombreHotel: this.formHotel.get('nombreHotel')?.value || '',
      telefonoHotel: this.formHotel.get('telefonoHotel')?.value || '',
      direccionCorreoHotel: this.formHotel.get('direccionCorreoHotel')?.value || '',
      numeroHabitacionesHotel:Number (this.formHotel.get('numeroHabitacionesHotel')?.value) || 0
    };
      this.hotelService.agregarHotel(hotelData);
    }
  }

  public onSubmit() {
    if (this.formHotel.valid) {
      const hotelData = this.formHotel.value;
      this.agregarHotel();
      Swal.fire('Hotel creado', 'Hotel creado exitosamente', 'success')
    } else {
    }
  }
}
 
