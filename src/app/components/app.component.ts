import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'allket';


  constructor(private productoService: ProductoService){
  }

  listadoProducto: NewProducto[];

  ngOnInit() {
    this.productoService.getProducto()
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
