import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  details:any=[]
  constructor(private data:DataService) { }
  ngOnInit(): void {
  }
  accounts(){
    this.details=this.data.account_details
  }
}
