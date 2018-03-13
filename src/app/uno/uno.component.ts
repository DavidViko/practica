import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { Uno } from '../model/uno';


@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  idBuscado: number;
  uno: Uno;
  fallo: boolean;

  constructor(public servicioService: ServicioService) {
    this.uno = new Uno();
    // this.uno.id = 0;
    // this.uno.title = '';
    // this.uno.userId = 0;
    // this.uno.completed = false;
  }

  ngOnInit() {
    console.log('unoComponent onInit');

  }//final onInit


  /**
   * Mapea los Datos en formato Json a TODO que proviene del Servicio Rest
   * @param resul 
   */
  mapeo(resul: any) {
    resul.forEach(element => {
      this.uno = new Uno();
      this.uno.id = element.id;
      this.uno.userId = element.userId;
      this.uno.title = element.title;
      this.uno.completed = element.completed;
    });
  }


  buscarId() {
    console.log('unoComponent llamada');
    this.servicioService.obtenerBuscadoId(this.idBuscado).subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        console.debug('peticion correcta %o', resultado.length);
        this.mapeo(resultado);
        if (resultado.length < 1) {
          this.fallo = true;
        }else{
            this.fallo = false;
        }
      },
      error => {
        console.warn('peticion incorrecta %o', error);
        this.fallo = true;
      }
    );//final subscribe
  }
}
