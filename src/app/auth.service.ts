import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  login(username: string = '', password: string = '') {
    const userInfo = { un: username, pw: password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(
      'http://localhost:5000/Login',
      JSON.stringify(userInfo),
      { headers: headers, responseType: 'text' }
    );
  } //login
  dky(username: string = '', password: string = '') {
    const userInfo = { un: username, pw: password, admin: 0 };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this._http
      .post('http://localhost:3000/user', JSON.stringify(userInfo), {
        headers: headers,
        responseType: 'text',
      })
      .subscribe((res) => {});
    return this._http.post(
      'http://localhost:5000/dangky',
      JSON.stringify(userInfo),
      {
        headers: headers,
        responseType: 'text',
      }
    );
  } //login
  checkPass(id: string) {
    return this._http.get('http://localhost:3000/user/' + id);
  }
  doiMK(id: string, hashNew: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.patch(
      'http://localhost:3000/user/' + id,
      JSON.stringify(hashNew),
      { headers: headers, responseType: 'text' }
    );
  }

  thoat() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
  }
  public daDangNhap() {
    const str = localStorage.getItem('expires_at') || '';
    if (str == '') return false; //chưa dn
    const expiresAt = JSON.parse(str);
    // console.log(str);

    return moment().isBefore(moment(expiresAt));
  }
}
