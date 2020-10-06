import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiendaDTO } from '../Clases/TiendaDTO';

@Injectable({
  providedIn: 'root'
})
export class GestionAPIService {

  constructor(protected httpClient: HttpClient) { }
  
  public obtenerProducto(id: any): Observable<any>{
    let idJson : string = JSON.stringify(id);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers = headers.append('Content-Type','application/json');
    
    /* cabecera  para algun token , falta token
    headers.set('Authorization','bearer');
    */

    return this.httpClient.post('http://167.172.114.200:30126/getProducto', idJson, {headers});
    
  }

  public obtenerTienda(id: any): Observable<any>{
    let idJson : string = JSON.stringify(id);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers = headers.append('Content-Type','application/json');
    
    /* cabecera  para algun token , falta token
    headers.set('Authorization','bearer');
    */

    return this.httpClient.post('http://167.172.114.200:30126/getTienda', idJson, {headers});
    
  }

  public obtenerProductos(): Observable<any>{

    return this.httpClient.post('http://167.172.114.200:30126/getProductos','');
    
  }

  public obtenerProductosTienda2(tienda: String): Observable<any>{

    return this.httpClient.post('http://167.172.114.200:30126/getProductosByTienda?tienda='+tienda,'');
    
  }

  public crearTienda(tienda: TiendaDTO): Observable<any>{
    let objJson : string = JSON.stringify(tienda);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers = headers.append('Content-Type','application/json');
    
    headers = headers.append('Authorization',localStorage.getItem("token"));
    headers = headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://167.172.114.200:30126/createTienda', objJson, {headers});
    
  }
}

