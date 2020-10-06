import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  constructor(protected httpClient: HttpClient) { }

  public static logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  public static islogged(): boolean{
    if (localStorage.getItem("token") != undefined && localStorage.getItem("user") != undefined) {
      return true;
    }
    return false;
  }

  public obtenerTokenUsuario(usuario: string,passwd: string ): Observable<any>{
    let request = {
      "usuario":usuario,
      "passwd":passwd
    };
    
    let requestJSON : string = JSON.stringify(request);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers.set('Content-Type','application/json');
    
    let tokentmp = this.httpClient.post('http://167.172.114.200:30126/user?user='+usuario+'&password='+passwd, '');
    tokentmp.subscribe(
      (data) => {
        localStorage.setItem("token", Object(data)["token"]);
        localStorage.setItem("user", Object(data)["id"]);
        console.log(localStorage.getItem("token"));
        console.log(JSON.stringify(data));
        if (data == undefined){
          alert('Login fallido, revisa los datos ingresados')
        }
      },
      (error) => {
        console.error(error);
      }
    );
    return tokentmp;
    
  }

}
