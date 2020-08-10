import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithComponent() {
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, Object.assign({initialState}, { class: 'modal-dialog-centered' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {
  }

}
