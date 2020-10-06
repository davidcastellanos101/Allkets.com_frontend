import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from 'src/app/Clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(protected httpClient: HttpClient) {}

  public consulta(id: any): Observable<any>{
    let idJson : string = JSON.stringify(id);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers.set('Content-Type','application/json');
    
    /* cabecera  para algun token , falta token
    headers.set('Authorization','bearer');
    */

    return this.httpClient.post('http://167.172.114.200:30126/getProducto', idJson);
    
  }

  public crearProducto(pdto: Producto): Observable<any>{
    let idJson : string = JSON.stringify(pdto);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers = headers.append('Content-Type','application/json');
    
    headers = headers.append('Authorization',localStorage.getItem("token"));
    headers = headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://167.172.114.200:30126/createProducto', idJson, {headers});
    
  }

}
