import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/Producto';
import { GestionAPIService } from 'src/app/Services/Gestion-api.service';

@Component({
  selector: 'app-trends',
  templateUrl: './Trends.component.html',
  styleUrls: ['./Trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  public productos: Producto[];

  constructor(private gestionAPI: GestionAPIService) {}

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
