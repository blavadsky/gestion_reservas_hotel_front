import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formHotel: FormGroup;
  hoteles: HotelDTO[] = [];
  
  constructor(private formBuilder: FormBuilder, private hotelService:HotelService, private hotelDataService: HotelDataService, private snack:MatSnackBar){
    this.formHotel = this.formBuilder.group({
      idHotel: ['', Validators.required],
      nombreHotel: ['', Validators.required],
      telefonoHotel: ['', Validators.required],
      direccionCorreoHotel: ['', Validators.required],
      numeroHabitacionesHotel: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.hotelDataService.hoteles$.subscribe((hoteles: HotelDTO[]) => {
      this.hoteles = hoteles;
    }); 
    this.obtenerHoteles();
  }

  onSubmit() {
    if (this.formHotel.valid) {
      const hotelData = this.formHotel.value;
      this.hotelService.agregarHotel(hotelData).subscribe(
        (response) => {
          Swal.fire('Hotel creado', 'Hotel creado exitosamente en el sistema.', 'success')
          .then(() => {
            this.formHotel.reset(); this.obtenerHoteles();
          });
          console.log('Hotel creado:', response);
        },
        (error) => {
          console.error('Error al crear hotel:', error);
        }
      );
    } else {
      console.warn('Formulario no válido. Revise los campos.');
    }
  }


  obtenerHoteles() {
    this.hotelService.listarHoteles().subscribe(
      
      (hoteles: any) => {
        this.hoteles = hoteles;
        console.log("Hoteles creados <<<z : ", hoteles);
      },
      (error) => {
        console.error('Error al obtener la lista de hoteles', error);
      }
    );
  }

  habilitarEdicion(hotel: any) {
    hotel.enEdicion = true;
  }

  guardarCambios(hotel: any) {
    this.hotelService.actualizarHotel(hotel).subscribe(
      (respuesta) => {
        hotel.enEdicion = false;
      },
      (error) => {
      }
    );
  }


  eliminarHotel(hotel: HotelDTO) {
    if (hotel.idHotel !== undefined) {
      const idHotelNumero = Number(hotel.idHotel);
      this.hotelService.eliminarHotel(idHotelNumero).subscribe(resultado => {
        if (resultado) {
          console.log("eliminado ");
          this.hoteles = this.hoteles.filter(r => r.idHotel !== hotel.idHotel);
        } else {
          console.log('Error al eliminar el hotel.');
        }
      });
    } else {
      console.log('No se puede eliminar el hotel sin un ID.');
    }
  }


  
}
 
