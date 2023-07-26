import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './componentes/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './componentes/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NumberPickerComponent } from './componentes/components/number-picker/number-picker.component'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ReservaComponent,
    NumberPickerComponent
  ],
  imports: [
    MatMenuModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
