import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  image:string = "assets/img/undraw_rocket.png"
  constructor() { }

  ngOnInit(): void {
  }

}
