import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';

//Servicios
import { ServicioService } from './providers/servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    ServicioService],
    bootstrap: [AppComponent]
})
export class AppModule { }
