import { Component, OnInit } from '@angular/core';

import {
  faAngleLeft,
  faAngleRight,
  faList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sliders',
  templateUrl: './Sliders.component.html',
  styleUrls: ['./Sliders.component.scss'],
})
export class SlidersComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faList = faList;

  config = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.main-btn-next',
      prevEl: '.main-btn-prev',
    },
  };
  configCategories = {
    slidesPerView: 1,
    pagination: false,
    navigation: {
      nextEl: '.categories-btn-next',
      prevEl: '.categories-btn-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
