import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/Clases/Producto';
import { GestionAPIService } from '../../Services/gestion-api.service';
import { Color } from '../../Clases/Color';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  public producto: Producto;
  public imgSeleccionada: string;
  public clrSeleccionado: string;
  public tmnSeleccionado: string;
  public productoForm: FormGroup;

  constructor(private gestionAPI: GestionAPIService, private fb: FormBuilder) {
    this.producto = new Producto();
    this.productoForm = this.fb.group({
      id: [null],
      tamano: [null, Validators.required],
      color: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.obtenerProducto();
  }

  private obtenerProducto(): void {
    // Se cambiara el 100 , ya que  se debe obtener de la URL
    this.gestionAPI.obtenerProducto(100).subscribe(
      (data) => {
        this.producto = data;
        this.imgSeleccionada = this.producto.imagenes[0];
        this.clrSeleccionado = this.producto.colores[0].nombre;
        this.tmnSeleccionado = this.producto.tamanos[0];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public actualizarImagen(imagen: any): void {
    this.imgSeleccionada = imagen;
  }

  public actualizarColor(color: Color): void {
    this.clrSeleccionado = color.nombre;
  }

  public actualizarTamano(tamano: any): void {
    this.tmnSeleccionado = tamano;
  }

  public isColorSelected(nomColor: string): boolean{
      return nomColor === this.clrSeleccionado;
  }
}
