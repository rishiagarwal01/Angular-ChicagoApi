import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMoreComponent } from './view-more/view-more.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:"view-more/:id",
    component:ViewMoreComponent,
  },
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"wishlist",
    component:WishlistComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
