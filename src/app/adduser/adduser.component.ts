import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  id:any;
  image:any;
  name:any;
  email:any;
  password:any;
  age:any;
  contact:any;
  bloodGroup:any;
  Address:any;
  Department:any;
  cardExpire:any;
  cardNumber:any;
  cardType:any;
  currency:any;
  iban:any;




  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  adduser(){
  
    let newuser = {
      id:this.id,
      firstName:this.name,
      age:this.age,
      email:this.email,
      phone:this.contact,
      password:this.password,
      image:this.image,
      bloodGroup:this.bloodGroup,
      address:{
        address:this.Address,
      },
      bank:{
        cardExpire:this.cardExpire,
        cardNumber:this.cardNumber,
        cardType:this.cardType,
        currency:this.currency,
        iban:this.iban,

      },
      
        department:this.Department

    
    
     }
    console.log(newuser);
    
    this.api.adduser(newuser)
     .subscribe(()=>{
     alert('user details are succesfully added')
       this.router.navigateByUrl('')
     })
    
    
    
    //alert('new user addedd successfully')
  }
  
}
