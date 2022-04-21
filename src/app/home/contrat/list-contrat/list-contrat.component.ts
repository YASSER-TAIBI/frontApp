import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {ContratService } from '../../services/contrat.service';
import { AuthService } from '../../../shared/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../shared/validate.service';
import { Contrat } from '../../models/contrat.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { User } from '../../models/users.model';

declare var $: any;

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {


  //contrat
  _id: String;
  typeContrat: String;
  nbrHeure: Number=0;
  salaireBrut: Number=0;
  nbrConges: Number=0;
  userId: String;

  contratResult: any;
  contratList: any[] = [];

  usersResult: any;
  usersList : any[] = [];

  modalRef?: BsModalRef;
  contrat: Contrat;
  editForm: FormGroup; 
  
  //Pagination
  p: number = 1;

  //delete infos
  idCont:any;
  tyCont:any;
  nbrH:any;
  salaireB:any;
  nbrC:any;
  idUser:any;

  user: User = new User();

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private validateService: ValidateService,
    private contratService: ContratService,
    private authService: AuthService,
    private modalService: BsModalService,
    private fb: FormBuilder 
    ) { }

  ngOnInit() {

     // Find the list Contrat
    this.getContratList();

    // Find the Name of Users in dropdown select Option
    this.getNameOfUsers();


    this.editForm = this.fb.group({
      idCrt: [''],
      tyContrat: [''],
      nbH: [''],
      salBrut: [''],
      nbConge: [''],
      utils: ['']
    } );

//################################################################################################################################################################################
//################################################################################################################################################################################
//################################################################################################################################################################################
//################################################################################################################################################################################
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
//################################################################################################################################################################################
//################################################################################################################################################################################
//################################################################################################################################################################################
//################################################################################################################################################################################
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
     // console.log(this.usersList);
    });
  }

  handleClear(){

    this.typeContrat = ' ';
    this.nbrHeure = Number('');
    this.salaireBrut = Number('');
    this.nbrConges = Number('');
    this.userId = ' ';
  }

  openModalAdd(templateAdd: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateAdd);
 }

 // add contrat
   onAddContratSubmit(){
  
    const contrat = {

      typeContrat: this.typeContrat,
      nbrHeure: this.nbrHeure,
      salaireBrut: this.salaireBrut,
      nbrConges: this.nbrConges,
      utilisateur: this.userId,
   };

 this.contratService.addContrat(contrat).subscribe(data => {
  this.contratList.push(data.contratDetails);
    this._flashMessagesService.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
    this.handleClear();
    this.ngOnInit();
      this.modalService.hide();
}, error => {
  this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
  this.handleClear();
  this.ngOnInit();
      this.modalService.hide();
});

  }

  onEditContratSubmit(){

    const contrat = {

      _id: this.editForm.controls['idCrt'].value,
      typeContrat: this.editForm.controls['tyContrat'].value,
      nbrHeure: this.editForm.controls['nbH'].value,
      salaireBrut: this.editForm.controls['salBrut'].value,
      nbrConges: this.editForm.controls['nbConge'].value,
      utilisateur: this.editForm.controls['utils'].value
   };

    this.contratService.editContrat(contrat).subscribe(data => {
   
      console.log(contrat);
      console.log(contrat._id);

      if (data.success) {

        console.log("data: "+data);
      console.log("data.resulte: "+data.resulte);
          // for(let contrat of this.contratList){

          //   if(this.editForm.)

          // } 
        this._flashMessagesService.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.ngOnInit();
        this.modalService.hide();
      } else {
      this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.ngOnInit();
      this.modalService.hide();
    }
    
  });
  }
  
  openModalEdit(templateEdit: TemplateRef<any>, contrat: Contrat) {
    this.modalRef = this.modalService.show(templateEdit);
    
    this.editForm.patchValue( {
      idCrt: contrat._id,
      tyContrat: contrat.typeContrat, 
      nbH: contrat.nbrHeure,
      salBrut: contrat.salaireBrut,
      nbConge: contrat.nbrConges,
      utils: contrat.utilisateur
    });
 }


 onDeleteContratSubmit(){

  console.log(this.idCont);
  this.contratService.deleteContrat(this.idCont).subscribe(data => {
  
    if (data.success) {

      console.log("data: "+data);
    console.log("data.resulte: "+data.resulte);

      this._flashMessagesService.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
      this.ngOnInit();
      this.modalService.hide();
    } else {
    this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
    this.ngOnInit();
    this.modalService.hide();
  }
  
});

 }

 openModalDelete(templateDelete: TemplateRef<any>,  contratId: String) {
  this.modalRef = this.modalService.show(templateDelete);
  

  for (let contrat in this.contratList) {
    let item = this.contratList[contrat];

     if(item._id == contratId){

      this.idCont =item._id;
      this.tyCont=item.typeContrat;
      this.nbrH=item.nbrHeure;
      this.salaireB=item.salaireBrut;
      this.nbrC=item.nbrConges;
      this.idUser=item.utilisateur;

      break;
     }
  }
 
}
 

 openUserModal(templateUser: TemplateRef<any>, userId: String) {
  this.modalRef = this.modalService.show(templateUser);
  

  for (let user in this.usersList) {
    let item = this.usersList[user];

     if(item._id == userId){

      document.getElementById('idUser').setAttribute('value', item._id);
      document.getElementById('nom').setAttribute('value', item.nom);
      document.getElementById('prenom').setAttribute('value', item.prenom);
      document.getElementById('email').setAttribute('value', item.email)
      break;
     }
  }

}
}
