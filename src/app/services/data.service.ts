import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  account_details:any ={
    1000:{ name: "ajay",username:"testone", accno: 1000, password: "testone", amount: 5000,bank:"sbi"},
    1001:{ name: "vijay",username:"testtwo", accno: 1001, password: "testtwo", amount: 3000,bank:"sbi"},
    1002:{ name: "ram",username:"testthree", accno: 1002, password: "testthree", amount: 7000,bank:"federal"},
    1003:{ name: "ravi",username:"testfour", accno: 1003, password: "testfour", amount: 10000,bank:"federal"},

  }
  constructor() { }

  register(uname:any,acno:any,paswd:any){
    let users=this.account_details
    if(acno in users){
      return false;
    }
    else{
      users[acno]={
        username:uname,
        accno:acno,
        password:paswd,
        balance:0     
      }
      return true;
    }
  }
  login(ac:any,pw:any){
    let dataset=this.account_details

    if(ac in dataset){
      if(pw==dataset[ac]["password"]){
       return true

      }
      else{
        alert("Login failed")
        return false
      }
    }
    else{
      alert("Invalid account details")
      return false
    }
  }
}
