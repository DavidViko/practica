import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../model/casa';

const END_POINT = "http://localhost:3000";

@Injectable()
export class CasasService {

  casas: Casa[];

  constructor(public http: HttpClient) {
    console.log('CasasService constructor');
    this.casas = [];
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */

  getAll(): Observable<any> {
    let url = END_POINT + '/casas';
    console.log(`CasasService getAll ${url}`);//equivale a console.log('ServicioService getBuscado '+url);
    return this.http.get(url);
  }
}

