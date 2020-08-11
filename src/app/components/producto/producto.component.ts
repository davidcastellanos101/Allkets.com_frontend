import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/Clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  listadoProducto: Producto[];
  postId: Producto;

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



    var post = new Producto();
    this.productoService.postProducto(post)
    .subscribe(
      (data) =>{
        this.postId.id = post.id;
      }
    )
  }

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

}
