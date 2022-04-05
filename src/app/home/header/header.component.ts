import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  image: String ="assets/img/undraw_profile.png";

  constructor(  
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { 
      this.authService.loadCurrentUser();
    }

  ngOnInit(): void {
  }


  logout(){

    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;

  }
}
