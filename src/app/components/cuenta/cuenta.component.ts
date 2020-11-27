import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cuenta',
  templateUrl: './Cuenta.component.html',
  styleUrls: ['./Cuenta.component.scss'],
})
export class CuentaComponent implements OnInit {
  public seccion: String;

  constructor(private router: Router) {
    this.seccion = 'crearProducto';
  }

  ngOnInit(): void {}

  public cambiarSeccion(seccion: String): void {
    this.seccion = seccion;
  }

  public getSeccion(){
    return this.seccion;
  }
}
