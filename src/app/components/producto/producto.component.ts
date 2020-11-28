import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Clases/Producto';
import { GestionAPIService } from '../../Services/Gestion-api.service';
import { Color } from '../../Clases/Color';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestDTO } from 'src/app/Clases/RequestDTO';

@Component({
  selector: 'app-producto',
  templateUrl: './Producto.component.html',
  styleUrls: ['./Producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  public producto: Producto;
  public imgSeleccionada: string;
  public clrSeleccionado: string;
  public tmnSeleccionado: string;
  public productoForm: FormGroup;
  public productoId: string;
  public productoTienda: string;
  public productoNombre: string;
  public mapaBread: Map<string, string>;

  constructor(
    private gestionAPI: GestionAPIService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.producto = new Producto();
    this.mapaBread = new Map<string, string>();
    this.productoForm = this.fb.group({
      id: [null],
      tamano: [null, Validators.required],
      color: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id');
    this.productoTienda = this.route.snapshot.paramMap.get('tienda');
    this.productoNombre = this.route.snapshot.paramMap.get('nombre');
    this.obtenerProducto();

    this.mapaBread.set('/', 'Inicio');
    this.mapaBread.set('/tienda/' + this.producto.tienda, this.productoTienda);
    
  }

  private obtenerProducto(): void {
    // Se cambiara el 100 , ya que  se debe obtener de la URL
    let reqdto: RequestDTO;
    reqdto = new RequestDTO();
    reqdto.id = this.productoId;
    this.gestionAPI.obtenerProducto(reqdto).subscribe(
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


  public despPasarela() {
    let ePayco: any;
    let handler = ePayco.checkout.configure({
      key: '45b960805ced5c27ce34b1600b4b9f54',
      test: true
    });

    let data={
      //Parametros compra (obligatorio)
      name: "Camiseta Highlander",
      description: "Camiseta Highlander",
      invoice: "1321651651324342",
      currency: "cop",
      amount: "47.99",
      tax_base: "0",
      tax: "0",
      country: "co",
      lang: "en",

      //Onpage="false" - Standard="true"
      external: "true",


      //Atributos opcionales
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      confirmation: "http://secure2.payco.co/prueba_curl.php",
      response: "http://secure2.payco.co/prueba_curl.php",

      //Atributos cliente
      name_billing: "Andres Perez",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",

     //atributo deshabilitación metodo de pago
      //methodsDisable: ["TDC", "PSE","SP","CASH","DP"]

      };
      handler.open(data);
  }

  //metodos de actualizacion al seleccionar
  // algun elemento
  public actualizarImagen(imagen: any): void {
    this.imgSeleccionada = imagen;
  }

  public actualizarColor(color: Color): void {
    this.clrSeleccionado = color.nombre;
  }

  public actualizarTamano(tamano: any): void {
    this.tmnSeleccionado = tamano;
  }

  public isColorSelected(nomColor: string): boolean {
    return nomColor === this.clrSeleccionado;
  }
}
