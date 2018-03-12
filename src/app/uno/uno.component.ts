import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';


@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  nombre: string;
  constructor(public servicioService: ServicioService) {
    this.nombre= "";
  }
    
  ngOnInit() {
    console.log('TodosComponent onInit');
    this.servicioService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        //this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//final subscribe
  }//final onInit

  llamada(nombre){

  }
}
