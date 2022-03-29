import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';



@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  jwtHelperService: JwtHelperService = new JwtHelperService();


  

  constructor(private http: HttpClient) {  }

  registerUser(user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
   // return this.http.post(this.serverPath + '/api/users/register', user, {headers: headers})
     return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  }

  authenticateUser(user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    //return this.http.post(this.serverPath + '/api/users/authenticate', user, {headers: headers})
    return this.http.post('http://localhost:3000/users/login', user, {headers: headers});
  }

 // getProfile() {
  //  let headers = new Headers();
   // this.loadToken();
   // headers.append('Authorization', this.authToken);
   // headers.append('Content-Type', 'application/json');
   // return this.http.get(this.serverPath + '/api/users/profile', {headers: headers})
    //  .map(res => res.json());
 // }

 storeUserData(token, user) {
   localStorage.setItem('id_token', token);
   localStorage.setItem('user', JSON.stringify(user));
   // localStorage.setItem('user_name', JSON.stringify(user.username));
    this.authToken = token;
    this.user = user;
  }

  // loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  // loadUserName() {
  //   const userName_stored = localStorage.getItem('user_name');
  //   this.userName = userName_stored;
  // }

  getToken() {
    const token = localStorage.getItem(environment.tokenIndex);
    return token ? token : ''
}

setToken(token){
  localStorage.removeItem(environment.tokenIndex);
  localStorage.setItem(environment.tokenIndex, token)
}

isTokenExpired() {
    if (!localStorage.getItem(environment.tokenIndex)) {
        return true;
    }
    let tokenDecoded = this.jwtHelperService.decodeToken(localStorage.getItem(environment.tokenIndex));
    if (tokenDecoded.exp) {
        return this.jwtHelperService.isTokenExpired(localStorage.getItem(environment.tokenIndex));
    } else {
        return false;
    }
}

  // logout() {
  //   this.authToken = null;
  //   this.user = null;
  //   localStorage.clear();
  // }


}
