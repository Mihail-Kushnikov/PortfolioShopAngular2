import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainShopComponent } from './main-shop/main-shop.component';
import { MainPageComponent } from './main-page/main-page.component'
import { MainBlogComponent } from './main-blog/main-blog.component'
import { ContactComponent } from './contact/contact.component'
import { MainHomeComponent } from './main-home/main-home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'



const routes: Routes = [
  { path: 'shop', component:  MainShopComponent },
  { path: 'page', component:  MainPageComponent },
  { path: 'blog', component:  MainBlogComponent },
  { path: 'contacts', component:  ContactComponent },
  { path: 'home', component:  MainHomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
