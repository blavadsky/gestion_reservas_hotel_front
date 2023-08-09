import { Component } from '@angular/core';
import { ReservaDTO } from 'src/app/models/reservaDTO';
import { ReservaService } from 'src/app/servicios/reserva.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {

  reservas: ReservaDTO[] = []; 

  constructor(private reservaService: ReservaService) {}

  ngOnInit() {

    this.obtenerReservasPorUsuario();
  }
  
  private obtenerReservasPorUsuario() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const correoElectronico = decodedToken.sub;
      this.reservaService.obtenerReservasPorUsuario(correoElectronico).subscribe(res => {
        console.log(res)
        this.reservas = res;
      })
    }

  }

}

