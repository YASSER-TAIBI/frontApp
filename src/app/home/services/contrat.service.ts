import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments.dev';
import { Contrat } from '../../home/models/contrat.model';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrat: Contrat = new Contrat();

  constructor(private httpClient: HttpClient) { }


  getContrat(){

     let url= environment.CONTRAT_BASE_URL+environment.CONTRAT.GET_ALL_CONTRAT
    return this.httpClient.get(url);

  }

  viewContrat(id){

    
  }

  addContrat(contrat): Observable<any>{
    let url = environment.CONTRAT_BASE_URL+environment.CONTRAT.ADD_CONTRAT
    return this.httpClient.post(url,contrat);
  }

  editContrat(id, contrat): Observable<any>{

    let url = environment.CONTRAT_BASE_URL+environment.CONTRAT.UPDATE_CONTRAT
    return this.httpClient.put(url,id,contrat);
  }

  deleteContrat(id){

    
  }

  searchContrat(keyword){

    
  }
}
