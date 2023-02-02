import { Injectable } from '@angular/core';
import { DuAn } from './du-an';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DuAnService {
  constructor(private h: HttpClient) {}
  getDa() {
    return this.h.get('http://localhost:3000/DuAn');
  }
  getNV() {
    return this.h.get('http://localhost:3000/NhanVien');
  }
  themDa(da: any) {
    return this.h.post('http://localhost:3000/DuAn', da);
  }
  xoaDa(id: number) {
    return this.h.delete('http://localhost:3000/DuAn/' + id);
  }
  suaDa(da: any) {
    return this.h.put('http://localhost:3000/DuAn/' + da.id, da);
  }
  getMotDa(id: number = 0) {
    return this.h.get('http://localhost:3000/DuAn/' + id);
  }
}
