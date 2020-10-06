import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/Clases/producto';
import { Color } from 'src/app/Clases/Color';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  public formGroup: FormGroup;
  public imagenes: String[];

  constructor(private formBuilder: FormBuilder,private gestionAPI: ProductoService) {
    this.buildForm();
    this.imagenes = new Array<String>();
   }

   private buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', [
        Validators.required, 
      ]],
      precio: ['', [
        Validators.required, 
      ]],
      desc: ['', [
        Validators.required, 
      ]],
      color1: [undefined, [ 
        Validators.required,
      ]],
      color2: [undefined, [ 
      ]],
      color3: [undefined, [ 
      ]],
      tam1: [undefined, [ 
        Validators.required,
      ]],
      tam2: [undefined, [ 
      ]],
      tam3: [undefined, [ 
      ]],
      img1: [undefined, [ 
        Validators.required,
      ]],
      img2: [undefined, [ 
      ]],
      img3: [undefined, [ 
      ]],
    });
  }

  ngOnInit(): void {
  }

  public crearProducto() {
    let pdto = new Producto();
    pdto.nombre = this.formGroup.controls['nombre'].value;
    pdto.descripcion = this.formGroup.controls['desc'].value;
    pdto.precio = this.formGroup.controls['precio'].value;
    pdto.tienda = localStorage.getItem("user");
    let colores: Color[];
    colores = new Array<Color>();
    if (this.formGroup.controls['color1'].value != undefined) {
      let color = new Color;
      color.nombre = "Color 1";
      color.valor = this.formGroup.controls['color1'].value;
      colores.push(color);
    }
    if (this.formGroup.controls['color2'].value != undefined) {
      let color = new Color;
      color.nombre = "Color 2";
      color.valor = this.formGroup.controls['color2'].value;
      colores.push(color);
    }
    if (this.formGroup.controls['color3'].value != undefined) {
      let color = new Color;
      color.nombre = "Color 3";
      color.valor = this.formGroup.controls['color3'].value;
      colores.push(color);
    }
    pdto.colores = colores;

    let tamanos: String[];
    tamanos = new Array<String>();
    if (this.formGroup.controls['tam1'].value != undefined) {
      tamanos.push(this.formGroup.controls['tam1'].value);
    }
    if (this.formGroup.controls['tam2'].value != undefined) {
      tamanos.push(this.formGroup.controls['tam2'].value);
    }
    if (this.formGroup.controls['tam3'].value != undefined) {
      tamanos.push(this.formGroup.controls['tam3'].value);
    }
    pdto.tamanos = tamanos;

    let imagenes: String[];
    imagenes = new Array<String>();
    this.imagenes.forEach(img => {
      imagenes.push(img.split(",")[1]);
    });
    pdto.imagenes = imagenes;

    console.log(pdto);

    this.gestionAPI.crearProducto(pdto).subscribe(
      (data) => {
        console.log(data);
        alert("Producto creado");
        this.formGroup.reset();
        this.imagenes = new Array<String>();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var files:File[] = Array.from(inputValue.files);

    files.forEach(file => {
      var myReader:FileReader = new FileReader();
  
      myReader.onloadend = (e) => {
        this.imagenes.push(myReader.result.toString());
      }
      myReader.readAsDataURL(file);
    });
  }

}
