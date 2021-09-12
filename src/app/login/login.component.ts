import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner"
  msg="Login Here"
  //account="Account number please"
  check:any
  acno="Account number please"
  pswd=""
  //acco="Account number"
 
  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
  }
  // account(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }
  // psswd(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
    
  // }
  login(){
    //console.log(a.value,p.value);
    
    var ac=this.acno
    var pw=this.pswd

    var res=this.data.login(ac,pw)
    if(res){
      alert("Login Success")
      this.router.navigateByUrl("dashboard")
    }
    
  }
  register(){
    this.router.navigateByUrl("register")
  }
}
