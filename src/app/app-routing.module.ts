import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdeatilsComponent } from './listdeatils/listdeatils.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
  {
    path:'',component:ListdeatilsComponent
  },
  {
    path:'viewlist/:id',component:ViewlistComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
