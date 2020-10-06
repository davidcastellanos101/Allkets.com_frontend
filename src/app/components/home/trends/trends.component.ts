import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/producto';
import { GestionAPIService } from 'src/app/Services/gestion-api.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  public productos: Producto[];

  constructor(private gestionAPI: GestionAPIService) { }

  ngOnInit(): void {
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
