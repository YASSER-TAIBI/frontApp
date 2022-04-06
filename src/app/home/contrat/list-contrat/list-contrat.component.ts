import { Component, OnInit } from '@angular/core';
import { Contrat } from '../../models/contrat.model';
import {ContratService } from '../../services/contrat.service';
//import {} ''

declare var $: any;

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  contratResult: any;
  contratList: any;

  constructor(private ContratService: ContratService) { }

  ngOnInit() {

     // Find the list Contrat
    this.getContratList();

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
this.ContratService.getContrat().subscribe((data: any[]) => {
  this.contratResult = data;
  this.contratList = this.contratResult.results;
  console.log(this.contratList);

});

  }

}
