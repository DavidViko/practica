import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Casa } from '../model/casa';
import { CasasService } from '../providers/casas.service';
import { } from 'events';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {
  casas: Casa[];
  casaSelec: Casa;
  alquier:boolean;
  venta:boolean;
  searchText:string;
  precioMin:number;
  precioMax:number;
  @Output() eventoEmitir = new EventEmitter();

  constructor(public casasService: CasasService) {
    console.log("Constructor Casas");
    this.casas = [];
    this.casaSelec = new Casa('', 0);
    this.precioMin =0;
    this.precioMax=0;
  }

  ngOnInit() {
    console.log('TodosComponent onInit');
    this.cargarCasas();  
  }// final onInit


  cargarCasas(){
    this.casasService.getAll().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }

    );//final subscribe   
  }
  /**
   * Mapea los Datos en formato Json a TODO que proviene del Servicio Rest
   * @param resul 
   */
  mapeo(resul: any) {
    let casa: Casa;
    resul.forEach(element => {
      casa = new Casa(element.nombre, element.precio);
      casa.id = element.id;
      casa.alquiler = element.alquiler;
      casa.habitaciones = element.habitaciones;
      casa.foto = element.foto;
      casa.direccion = element.direccion;
      this.casas.push(casa);

    });
    this.casaSelec = this.casas[0];
  }// final mapeo


  seleccionar($event, casa: Casa) {
    this.casaSelec = casa;
    console.log("InmobiliariaComponent: Emitimos evento al Componente hijo %o", this.casaSelec);
  
  }

}


