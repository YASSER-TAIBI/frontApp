import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  addContrat(contrat): Observable<any>{
    let url = environment.CONTRAT_BASE_URL+environment.CONTRAT.ADD_CONTRAT
    return this.httpClient.post(url,contrat);
  }

  editContrat(contrat): Observable<any>{
    let url = environment.CONTRAT_BASE_URL+environment.CONTRAT.UPDATE_CONTRAT+contrat._id
    return this.httpClient.put(url,contrat);
  }


  deleteContrat(id: any): Observable<any>{
    const httpParams = new HttpParams({
      fromObject:{
        idContrat: id
      }
    });
    let url = environment.CONTRAT_BASE_URL+environment.CONTRAT.DELETE_CONTRAT
    return this.httpClient.delete(url,{params: httpParams});
  }



  searchContrat(keyword){

    
  }
}
