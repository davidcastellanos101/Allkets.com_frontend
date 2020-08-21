import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionAPIService {

  constructor(protected httpClient: HttpClient) { }
  
  public obtenerProducto(id: any): Observable<any>{
    let idJson : string = JSON.stringify(id);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers.set('Content-Type','application/json');
    
    /* cabecera  para algun token , falta token
    headers.set('Authorization','bearer');
    */

    return this.httpClient.post('https://test123.free.beeceptor.com/post', idJson, {headers: headers});
    
  }
}
