import { Injectable } from '@angular/core';
import { NhanVien } from './nhan-vien';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NhanVienService {
  constructor(private h: HttpClient) {}
  getNv() {
    return this.h.get('http://localhost:3000/NhanVien');
  }
  themNv(nv: any) {
    return this.h.post('http://localhost:3000/NhanVien', nv);
  }
  xoaNv(id: number) {
    return this.h.delete('http://localhost:3000/NhanVien/' + id);
  }
  suaNv(nv: any) {
    return this.h.put('http://localhost:3000/NhanVien/' + nv.id, nv);
  }
  getMotNv(id: number = 0) {
    return this.h.get('http://localhost:3000/NhanVien/' + id);
  }
}
