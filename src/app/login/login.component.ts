import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//  public formValidate !: FormGroup;
 // constructor(private formBuilder : FormBuilder,
 //   private router : Router) { localStorage.clear() }


  ngOnInit(): void {

  //  this.formValidate = this.formBuilder.group({
  //    username : ['',Validators.required],
  //    password : ['',Validators.required],


//})


  }
  //login(): void{
  //  var isChecked = true;
  //  if(!this.formValidate.valid){
   //   for(var a in this.formValidate.controls){
    //     this.formValidate.controls[a].markAsDirty();
     //    this.formValidate.controls[a].updateValueAndValidity();
      //   isChecked = false;
    
    //}
    //}
    
    //if(this.formValidate.valid){
    // alert('Logged in Successfully')
    // console.log(this.formValidate.value)
    // localStorage.setItem('token',"eyJhbGcioiJIUZI1NiIsInR5cCI6IkpXVC39.eyJJc3N1ZXIigiJhZG1pbkAxMjMiLCJBZG1pbi16InRydwUiLCJ1bmlxdwVfbmFtZSI6ImFkbWluQDEyMyISImV4cCI6MTYyMTQONjk2NywiaXNIjoiYWRtaW5AMTIZIiwiYXVKIjoiaHRecHM6Ly9sb2NhbGhvc3Q6NDQZNDcvIne.24G9y5rGPMJ4UiuHb_r21_q1KFBqulnGS_JUva3jYuA")
    // this.formValidate.value.username=="yasser@gmail.com" ? localStorage.setItem( 'userType','employee') : localStorage.setItem('userType','admin')
    // this.formValidate.reset();
    // this.router.navigate(['main'])
    
    
  //  }
  //}
}