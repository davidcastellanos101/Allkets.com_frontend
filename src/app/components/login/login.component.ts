import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../Services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.autenticacion.obtenerTokenUsuario("juan","123").subscribe(
      (data) => {
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
