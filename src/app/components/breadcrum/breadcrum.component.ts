import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './Breadcrum.component.html',
  styleUrls: ['./Breadcrum.component.scss'],
})
export class BreadcrumComponent implements OnInit {
  @Input() parts: Map<string, string>;
  public activePage: string;
  public url: any[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.parts);
  }
}