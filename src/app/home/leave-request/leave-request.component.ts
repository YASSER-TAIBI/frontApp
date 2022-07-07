import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  public typeConge: Array<string> = ["Congé Annuel","Congé Quarantaine","Congé Parental","Congé Maladie"];

  constructor() { }

  ngOnInit(): void {
  }

}
