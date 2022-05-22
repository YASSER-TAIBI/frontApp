import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments.dev';
import { Activite } from '../models/activite.model';



@Injectable({
    providedIn: 'root'
})
export class ActiviteService {

    activite: Activite = new Activite();

    constructor(private httpClient: HttpClient) { }


    getActivite(){

        let url = environment.ACTIVITE_BASE_URL+environment.ACTIVITE.GET_ALL_ACTIVITE
        return this.httpClient.get(url);

    }

    addActivite(activite): Observable<any> {
        let url = environment.ACTIVITE_BASE_URL + environment.ACTIVITE.ADD_ACTIVITE
        return this.httpClient.post(url, activite);
    }


}
