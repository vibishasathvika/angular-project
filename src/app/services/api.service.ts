import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

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

}


