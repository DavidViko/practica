import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = "http://192.168.0.42:3000";


@Injectable()
export class ServicioService {

  constructor( public http: HttpClient) { 
    console.log('ServicioService constructor');
  }

  obtenerBuscadoId(idBuscado:number):Observable<any>{

    let url = END_POINT + '/todos?id='+idBuscado;
    console.log(`ServicioService getBuscado ${url}`);
    return this.http.get(url);
  }
}
