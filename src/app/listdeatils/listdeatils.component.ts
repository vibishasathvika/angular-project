import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-listdeatils',
  templateUrl: './listdeatils.component.html',
  styleUrls: ['./listdeatils.component.css']
})
export class ListdeatilsComponent implements OnInit {
  userlist:any=[]

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.apiservice.getuser()
    .subscribe((result)=>{
      //console.log(result);
      this.userlist=result
      console.log(this.userlist);
      
      
    })
    
    

   

  }

}
