import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdeatilsComponent } from './listdeatils/listdeatils.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ListdeatilsComponent,
    HeaderComponent,
    FooterComponent,
    ViewlistComponent,
    AdduserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
