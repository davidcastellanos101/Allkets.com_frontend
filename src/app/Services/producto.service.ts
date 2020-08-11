import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from 'src/app/Clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(protected http: HttpClient) {}

  getProducto(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/');
  }
  postProducto(post:Producto): Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts/',post);
  }
}
