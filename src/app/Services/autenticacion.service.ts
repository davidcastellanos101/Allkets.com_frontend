import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(protected httpClient: HttpClient) { }
  public obtenerTokenUsuario(usuario: string,passwd: string ): Observable<any>{
    let request = {
      "usuario":usuario,
      "passwd":passwd
    };
    
    let requestJSON : string = JSON.stringify(request);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers.set('Content-Type','application/json');
    
    
    return this.httpClient.post('https://run.mocky.io/v3/537e38e0-7d38-4e92-8b9f-84a233d85d10', requestJSON, {headers: headers});
    
  }

}
