import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ContratService } from '../../services/contrat.service';
import { AuthService } from '../../../shared/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../shared/validate.service';

declare var $: any;

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {


  //cotrat
  typeContrat: String;
  nbrHeure: Number;
  salaireBrut: Number;
  nbrConges: Number;
  userId: String;

  contratResult: any;
  contratList: any[] = [];

  usersResult: any;
  usersList : any[] = [];

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private validateService: ValidateService,
    private contratService: ContratService,
    private authService: AuthService) { }

  ngOnInit() {

     // Find the list Contrat
    this.getContratList();

    // Find the Name of Users in dropdown select Option
    this.getNameOfUsers();


    $(document).ready(function(){
      // Activate tooltip
      $('[data-toggle="tooltip"]').tooltip();
      
      // Select/Deselect checkboxes
      var checkbox = $('table tbody input[type="checkbox"]');
      $("#selectAll").click(function(){
        if(this.checked){
          checkbox.each(function(){
            this.checked = true;                        
          });
        } else{
          checkbox.each(function(){
            this.checked = false;                        
          });
        } 
      });
      checkbox.click(function(){
        if(!this.checked){
          $("#selectAll").prop("checked", false);
        }
      });
    });

  }

  getContratList(){
this.contratService.getContrat().subscribe((data: any[]) => {
  this.contratResult = data;
  this.contratList = this.contratResult.results;

});

  }

  getNameOfUsers(){

    this.authService.getusers().subscribe((data: any[]) => {
      this.usersResult = data;
      this.usersList = this.usersResult.results;
      console.log(this.usersList);
    });
  }


   onAddContratSubmit(){
  
    const contrat = {

      typeContrat: this.typeContrat,
      nbrHeure: this.nbrHeure,
      salaireBrut: this.salaireBrut,
      nbrConges: this.nbrConges,
      utilisateur: this.userId,
   };
   //console.log("bien entrer")
    // Required Fields
  //  if (!this.validateService.validateRegister(contrat)) {
  //   this._flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
  //   return false;
  // }

  // add contrat
 this.contratService.addContrat(contrat).subscribe(data => {
  this.contratList.push(data.contratDetails);
    this._flashMessagesService.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
}, error => {
  this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
});

  }

}
