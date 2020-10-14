import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { GestionAPIService } from 'src/app/Services/Gestion-api.service';

@Component({
  selector: 'app-promos',
  templateUrl: './Promos.component.html',
  styleUrls: ['./Promos.component.scss'],
})
export class PromosComponent implements OnInit {
  public productos: Producto[];
  @Input() public tienda: string;

  constructor(private gestionAPI: GestionAPIService) {}

  ngOnInit(): void {
    if (this.tienda != null) {
      this.gestionAPI.obtenerProductosTienda2(this.tienda).subscribe(
        (data) => {
          this.productos = data;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.gestionAPI.obtenerProductos().subscribe(
        (data) => {
          this.productos = data;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
