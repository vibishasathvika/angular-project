import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }

  getuser(){
   return this.api.get('https://dummyjson.com/users')
  }
  
viewuser(userId:any){
  return this.api.get('https://dummyjson.com/users/'+userId)
}
 adduser(newuser:any){
  return this.api.post('https://dummyjson.com/users/',newuser)

 }
 DeleteuserComponent(userId:any){
  return this.api.delete('https://dummyjson.com/users/'+userId)
 }

}


