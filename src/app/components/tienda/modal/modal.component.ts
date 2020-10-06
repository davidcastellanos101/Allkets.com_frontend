import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RequestDTO } from 'src/app/Clases/RequestDTO';
import { GestionAPIService } from 'src/app/Services/gestion-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {



  constructor(public bsModalRef: BsModalRef) {

  }

  ngOnInit(): void {}
}
