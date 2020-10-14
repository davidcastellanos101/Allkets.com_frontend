import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionAPIService } from '../../Services/Gestion-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  private returnUrl: String;

  constructor(
    private gestionAPI: GestionAPIService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  public auth() {
    this.gestionAPI
      .obtenerTokenUsuario(
        this.formGroup.controls['user'].value,
        this.formGroup.controls['password'].value
      )
      .subscribe((data) => {
        if (Object(data)['token'] != undefined) {
          if (this.returnUrl != undefined && this.returnUrl != '/login') {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(['/']);
          }
        }
      });
  }
}
