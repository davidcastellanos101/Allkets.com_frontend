import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  faUser,
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/Services/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public islogged() {
    return AutenticacionService.islogged();
  }

  public salir() {
    AutenticacionService.logout();
    this.router.navigate(['/login']);
  }

}
