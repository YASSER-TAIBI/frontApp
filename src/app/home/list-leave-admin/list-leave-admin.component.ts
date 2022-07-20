import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Conge } from '../models/conge.model';
import {CongeService } from '../services/conge.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-leave-admin',
  templateUrl: './list-leave-admin.component.html',
  styleUrls: ['./list-leave-admin.component.css']
})
export class ListLeaveAdminComponent implements OnInit {

  userId: string="";

  congeResult: any;
  congeList: any[] = [];

  usersResult: any;
  usersList : any[] = [];

  modalRef?: BsModalRef;

  //Valide infos
  idCng:any;
  utils:any;
  tyCng:any;
  dtD:any;
  dtF:any;
  dtDm:any;
  raison:any;
  etat:any;

  //Pagination
  p: number = 1;

  user: any;

 constructor(
    private congeService: CongeService,
    private authService: AuthService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) { 
    this.user = this.authService.user;
  }

  ngOnInit(){
    this.getCongeList();
    this.getNameOfUsers();

  }


  getCongeList(){
    this.congeService.getConge().subscribe((data: any[]) => {
      this.congeResult = data;
      this.congeList = this.congeResult.results;
    });
    
      }

      onListActiviteByUser(){
    this.congeService.getViewConge(this.userId).subscribe((data: any[]) => {
      this.congeResult = data;
      this.congeList = this.congeResult.results;
    });
    


      }

      openModalValide(templateValider: TemplateRef<any>, conge: Conge) {
        this.modalRef = this.modalService.show(templateValider);
      
            this.idCng = conge._id;
            this.utils =conge.utilisateur;
            this.tyCng=conge.typeConge;
            this.dtD=conge.dateDebut;
            this.dtF=conge.dateFin;
            this.dtDm=conge.dateDemande;
            this.etat=conge.avis;
            this.raison=conge.raison;

      }

      openModalRefuse(templateRefuser: TemplateRef<any>,conge: Conge) {

        this.modalRef = this.modalService.show(templateRefuser);
      
            this.idCng = conge._id;
            this.utils =conge.utilisateur;
            this.tyCng=conge.typeConge;
            this.dtD=conge.dateDebut;
            this.dtF=conge.dateFin;
            this.dtDm=conge.dateDemande;
            this.etat=conge.avis;
            this.raison=conge.raison;

      }


      onValideCongeSubmit(){

        if(this.etat === "Lancer"){

        const conge = {

    _id: this.idCng,
    typeConge: this.tyCng,
    dateDebut: this.dtD,
    dateFin: this.dtF,
    dateDemande: this.dtDm,
    raison: this.raison,
    avis: "Valider",
    utilisateur: this.utils

       };

       this.congeService.editConge(conge).subscribe(data => {
        this.toastr.success("Le congé a été traité avec succès.", "SUCCESS");
        this.ngOnInit();
        this.modalService.hide();
      }, error => {
       this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
        this.ngOnInit();
            this.modalService.hide();
      });
    }else{
      this.toastr.warning("Vous ne pouvez pas travailler sur ce dossier, car il a déjà été traité.", "WARNING");
      this.modalService.hide();
    }

      }


      onRefuseCongeSubmit(){

        if(this.etat === "Lancer"){

        const conge = {

    _id: this.idCng,
    typeConge: this.tyCng,
    dateDebut: this.dtD,
    dateFin: this.dtF,
    dateDemande: this.dtDm,
    raison: this.raison,
    avis: "Refuser",
    utilisateur: this.utils
       };

       this.congeService.editConge(conge).subscribe(data => {
        this.toastr.success("Le congé a été traité avec succès.", "SUCCESS");
        this.ngOnInit();
        this.modalService.hide();
      }, error => {
       this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
        this.ngOnInit();
            this.modalService.hide();
      });
    }else{
      this.toastr.warning("Vous ne pouvez pas travailler sur ce dossier, car il a déjà été traité.", "WARNING");
      this.modalService.hide();
    }
      }


      getNameOfUsers(){

        this.authService.getusers().subscribe((data: any[]) => {
          this.usersResult = data;
          this.usersList = this.usersResult.results;
        });
      }
}
