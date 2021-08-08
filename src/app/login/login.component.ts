import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner"
  //account="Account number please"
  check:any
  acno=""
  pswd=""
  //acco="Account number"
  account_details:any ={
    1000:{ name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001:{ name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002:{ name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003:{ name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

  }

  constructor() { }

  ngOnInit(): void {
  }
  account(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  psswd(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }
  login(){
    var ac=this.acno
    var pw=this.pswd
    let dataset=this.account_details

    if(ac in dataset){
      if(pw==dataset[ac]["password"]){
        alert("Login success")


      }
      else{
        alert("Login failed")
      }
    }
    else{
      alert("Invalid account details")
    }
  }
}
