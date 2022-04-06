import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments.dev';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private httpClient: HttpClient) { }


  getContrat(){

     let url= environment.CONTRAT_BASE_URL+environment.CONTRAT.GET_ALL_CONTRAT
    return this.httpClient.get(url);

  }

  viewContrat(id){

    
  }

  editContrat(id, contratObj){

    
  }

  deleteContrat(id){

    
  }

  searchContrat(keyword){

    
  }
}
