import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faUser,
  faShoppingCart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { GestionAPIService } from '../../Services/Gestion-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  public islogged() {
    return GestionAPIService.islogged();
  }

  public salir() {
    GestionAPIService.logout();
    this.router.navigate(['/login']);
  }

  public pagina(){
    return this.router.url;
  }
}
