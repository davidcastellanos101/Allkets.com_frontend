import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaDTO } from 'src/app/Clases/TiendaDTO';
import { GestionAPIService } from 'src/app/Services/gestion-api.service';

@Component({
  selector: 'app-actualizar-tienda',
  templateUrl: './actualizar-tienda.component.html',
  styleUrls: ['./actualizar-tienda.component.scss']
})
export class ActualizarTiendaComponent implements OnInit {

  public formGroup: FormGroup;
  public imagenperfil: String;
  public imagenbanner: String;

  constructor(private formBuilder: FormBuilder, private gestionAPI: GestionAPIService) {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      acerca: ['', [
        Validators.required,
      ]],
      img1: [undefined, [
        Validators.required,
      ]],
      img2: [undefined, [
        Validators.required
      ]],
    });
  }

  public crearTienda() {
    let tienda = new TiendaDTO();
    tienda.id = localStorage.getItem("user");
    tienda.html = this.formGroup.controls['acerca'].value;
    tienda.img = "perfil.png";
    tienda.imgbanner = "banner.png";
    tienda.img64 = (this.imagenperfil != undefined) ? this.imagenperfil.split(",")[1] : undefined;
    tienda.imgbanner64 = (this.imagenbanner != undefined) ? this.imagenbanner.split(",")[1] : undefined;

    console.log(tienda);

    this.gestionAPI.crearTienda(tienda).subscribe(
      (data) => {
        console.log(data);
        alert("Tienda actualizada");
        this.formGroup.reset();
        this.imagenperfil = undefined;
        this.imagenbanner = undefined;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changeListener($event, imagen: String): void {
    this.readThis($event.target, imagen);
  }

  readThis(inputValue: any, imagen: String): void {
    var files: File[] = Array.from(inputValue.files);
    var file: File = files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      if (imagen == '1') {
        this.imagenperfil = myReader.result.toString();
      }
      else {
        this.imagenbanner = myReader.result.toString();
      }
    }
    myReader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }


}
