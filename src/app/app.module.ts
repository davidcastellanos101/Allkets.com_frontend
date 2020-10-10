import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendsComponent } from './components/home/trends/trends.component';
import { HomeComponent } from './components/home/home.component';
import { PromosComponent } from './components/promos/promos.component';
import { SlidersComponent } from './components/home/sliders/sliders.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CardComponent } from './components/card/card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SWIPER_CONFIG, SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';

import { TranslateModule } from '@ngx-translate/core';
import { CrearProductoComponent } from './components/cuenta/crear-producto/crear-producto.component';
import { ActualizarTiendaComponent } from './components/cuenta/actualizar-tienda/actualizar-tienda.component';
import { GestionAPIService } from './Services/gestion-api.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrendsComponent,
    SlidersComponent,
    HomeComponent,
    PromosComponent,
    TiendaComponent,
    CardComponent,
    CuentaComponent,
    LoginComponent,
    Error404Component,
    ProductoComponent,
    BreadcrumComponent,
    CrearProductoComponent,
    ActualizarTiendaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  providers: [GestionAPIService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
