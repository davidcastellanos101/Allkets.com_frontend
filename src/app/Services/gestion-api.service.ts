import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiendaDTO } from '../Clases/TiendaDTO';
import { Producto } from '../Clases/producto';

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

  // metodos de login y logout  usuario asi como la creacion 

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
  
  public crearTienda(tienda: TiendaDTO): Observable<any>{
    let objJson : string = JSON.stringify(tienda);
    let headers = new HttpHeaders();
    /* cabecera que nos da el tipo de archivo que vamos a llamar */
    headers = headers.append('Content-Type','application/json');
    
    headers = headers.append('Authorization',localStorage.getItem("token"));
    headers = headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient.post('http://167.172.114.200:30126/createTienda', objJson, {headers});
    
  }

  /* consulta y creacion de producto  cambio hecho por alx*/ 

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

