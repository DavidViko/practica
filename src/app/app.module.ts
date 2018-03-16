import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { CasaComponent } from './inmobiliaria/casa/casa.component';

//Servicios
import { ServicioService } from './providers/servicio.service';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { CasasService } from './providers/casas.service';

//Filtros
import { FilterCasaPipe } from './pipes/filtroCasa';
import { FilterViviendas } from './pipes/filtroViviendas';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    FormBasicoComponent,
    InmobiliariaComponent,
    CasaComponent,
    FilterCasaPipe,
    FilterViviendas
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    CasasService,
    ServicioService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
