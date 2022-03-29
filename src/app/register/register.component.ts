import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//SERVICE
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../shared/auth.service';
import { ValidateService } from '../shared/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nom: String;
  prenom: String;
  email: String;
  password: String;


  constructor(
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }


  onRegisterSubmit(){

    const user = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,

  };
  //this._flashMessagesService.show('Success User added !!', { cssClass: 'alert-success' } );
  //this._flashMessagesService.show('Failure!', { cssClass: 'alert-danger' } );
  
  console.log(user);

  // Required Fields
  if (!this.validateService.validateRegister(user)) {
    this._flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  
  // Validate Email
  if (!this.validateService.validateEmail(user.email)) {
    this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
    return false;
}

  // Register user
  this.authService.registerUser(user).subscribe(data => {
    if (data.success) {
      this._flashMessagesService.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login']);
    } else {
      this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/register']);
    }
  });

}
}