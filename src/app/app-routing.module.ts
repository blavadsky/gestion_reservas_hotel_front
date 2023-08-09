import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './componentes/signup/signup.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { HotelesComponent } from './componentes/components/hoteles/hoteles.component';
import { MisReservasComponent } from './componentes/mis-reservas/mis-reservas.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'reserva', component: ReservaComponent},
  {path:'hoteles', component: HotelesComponent},
  {path:'mis-reservas', component: MisReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
