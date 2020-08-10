import { Component, OnInit } from '@angular/core';
import { 
  faUser,
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
