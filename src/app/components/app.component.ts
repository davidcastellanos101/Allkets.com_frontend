import { Component, OnInit} from '@angular/core';
import { GestionAPIService } from '../Services/gestion-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allket';


  constructor(private gestionAPI: GestionAPIService){
  }

  /*listadoProducto: NewProducto[];

  ngOnInit() {
    /*this.productoService.getProducto()
    .subscribe(
      (data) => {
        this.listadoProducto = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }/** */
}
