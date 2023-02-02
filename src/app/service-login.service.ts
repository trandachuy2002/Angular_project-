import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceLoginService {
  constructor(private h: HttpClient) {}
  getTk() {
    return this.h.get('http://localhost:3000/signupUsers');
  }
  themTk(tk: any) {
    return this.h.post('http://localhost:3000/signupUsers', tk);
  }
  xoaTk(id: number) {
    return this.h.delete('http://localhost:3000/signupUsers/' + id);
  }
  suaTk(tk: any) {
    return this.h.put('http://localhost:3000/signupUsers/' + tk.id, tk);
  }
  getMotTk(id: number = 0) {
    return this.h.get('http://localhost:3000/signupUsers/' + id);
  }
  getTkByEmail(email: string) {
    return this.h.get('http://localhost:3000/signupUsers?email=' + email);
  }
}
