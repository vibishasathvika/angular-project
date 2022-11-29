import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ListdeatilsComponent } from './listdeatils/listdeatils.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
  {
    path:'',component:ListdeatilsComponent
  },
  {
    path:'viewlist/:id',component:ViewlistComponent
  },
  {
    path:'adduser',component:AdduserComponent
  },
  {
    path:'updateuser',component:UpdateuserComponent
  },
  {
    path:'deleteuser/:id',component:DeleteuserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
