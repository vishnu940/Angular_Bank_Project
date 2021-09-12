import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""
  constructor(private data:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname
    var acno=this.acno
    var paswd=this.pswd
    var res=this.data.register(uname,acno,paswd)
    if(res){
      alert("Registered Successfully")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account Exists")
    }
    
  }

}
