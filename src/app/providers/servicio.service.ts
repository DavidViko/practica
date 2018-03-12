import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = "http://192.168.99.1:3000/todos";


@Injectable()
export class ServicioService {

  constructor( public http: HttpClient) { 
    console.log('ServicioService constructor');
  }

  getTodos():Observable<any>{

    let url = END_POINT + '';
    console.log(`ServicioService getTodos ${url}`);
    return this.http.get(url);
  }
}
