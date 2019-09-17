import { Component, NgModule } from '@angular/core';
import { BgGalereyComponent } from '../bg-galerey/bg-galerey.component'
import { CatalogComponent } from '../catalog/catalog.component'
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component'

@NgModule({
  declarations:[
    BgGalereyComponent,
    CatalogComponent,
    ButtonToggleComponent,
  ],
  exports: [Component]
})
 

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {

 }
