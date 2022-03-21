import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  image:string ="assets/img/undraw_profile.png";
  constructor() { }

  ngOnInit(): void {
  }

}
