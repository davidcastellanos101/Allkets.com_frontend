import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/Clases/Producto';
import { GestionAPIService } from '../../Services/gestion-api.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  public producto: Producto;

  constructor(private gestionAPI: GestionAPIService) {
    this.producto = new Producto();
  }

  ngOnInit() {
    this.obtenerProducto();
  }

  private obtenerProducto(): void {
    // Se cambiara el 100 , ya que  se debe obtener de la URL
    this.gestionAPI.obtenerProducto(100).subscribe(
      (data) => {
        this.producto = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
