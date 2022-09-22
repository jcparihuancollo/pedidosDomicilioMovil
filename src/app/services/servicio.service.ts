import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://192.168.0.7:8081/';
  constructor(private http : HttpClient) { }

  post(nombreServicio , datos){
    return this.http.post(this.apiUrl.concat(nombreServicio), datos);
  }

  get(nombreServicio , datos){
    datos = Object.entries(datos).map(e => e.join('=')).join('&');
    return this.http.get(this.apiUrl.concat(nombreServicio).concat('?').concat(datos));
  }
 
  put(nombreServicio , datos){
    return this.http.put(this.apiUrl.concat(nombreServicio), datos);
  }

  delete(nombreServicio , datos){
    return this.http.delete(this.apiUrl.concat(nombreServicio), {body: datos});
  }
}
