import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BgGalereyComponent } from './bg-galerey/bg-galerey.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainShopComponent } from './main-shop/main-shop.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BgGalereyComponent,
    ButtonToggleComponent,
    CatalogComponent,
    MainFooterComponent,
    MainShopComponent,
    MainPageComponent,
    MainHomeComponent,
    MainBlogComponent,
    ContactComponent,
    PageNotFoundComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
