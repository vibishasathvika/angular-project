import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-listdeatils',
  templateUrl: './listdeatils.component.html',
  styleUrls: ['./listdeatils.component.css']
})
export class ListdeatilsComponent implements OnInit {
  userlist:any;

  

  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.apiservice.getuser()
    .subscribe((result:any)=>{
      //console.log(result);
      this.userlist=result.users
      console.log(this.userlist);
      
    
      


      
      
    })
    
    

   

  }

}
