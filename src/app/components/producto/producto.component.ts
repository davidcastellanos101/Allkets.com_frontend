import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  id: String
  tienda: String
  nombre: String

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.tienda = this._route.snapshot.paramMap.get('tienda');
    this.nombre = this._route.snapshot.paramMap.get('nombre');

    //debug
    console.log(this.id);
    console.log(this.tienda);
    console.log(this.nombre);
    //
  }

}
