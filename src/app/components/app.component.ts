import { Component, OnInit} from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allket';


  constructor(private productoService: ProductoService){
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
