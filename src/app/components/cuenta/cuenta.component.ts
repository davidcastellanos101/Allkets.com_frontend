import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  public seccion: String;

  constructor() { 
    this.seccion = 'crearProducto';
  }

  ngOnInit(): void {
  }

  public cambiarSeccion(seccion: String): void{
    this.seccion = seccion;
  }

}
