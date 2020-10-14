import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './Modal/Modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GestionAPIService } from 'src/app/Services/Gestion-api.service';
import { RequestDTO } from 'src/app/Clases/RequestDTO';
import { TiendaDTO } from 'src/app/Clases/TiendaDTO';

@Component({
  selector: 'app-tienda',
  templateUrl: './Tienda.component.html',
  styleUrls: ['./Tienda.component.scss'],
})
export class TiendaComponent implements OnInit {
  public imgbanner: String;
  public imgperfil: String;
  public htmlModal: String;
  public tienda: TiendaDTO;
  public id: string;
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private gestionAPI: GestionAPIService
  ) {
    this.id = localStorage.getItem('user');
    let requestDTO: RequestDTO = new RequestDTO();
    requestDTO.id = this.id;
    this.gestionAPI.obtenerTienda(requestDTO).subscribe(
      (data) => {
        this.tienda = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /**
   * name
   */
  public isThereTienda(): boolean {
    if (this.tienda != undefined) {
      return true;
    }
    return false;
  }

  openModalWithComponent() {
    const initialState = {
      title: 'Modal with component',
    };
    this.bsModalRef = this.modalService.show(
      ModalComponent,
      Object.assign({ initialState }, { class: 'modal-dialog-centered' })
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {}
}
