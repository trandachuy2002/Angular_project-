import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DuLieuService {
  constructor(private h: HttpClient) {}

  //nv
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
  //duan
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
  //sp
  getSanPham() {
    return this.h.get('http://localhost:3000/sanpham');
  }
  themSanPham(sp: any) {
    return this.h.post('http://localhost:3000/sanpham', sp);
  }
  xoaSanPham(id: number) {
    return this.h.delete('http://localhost:3000/sanpham/' + id);
  }
  suaSanPham(sp: any) {
    return this.h.put('http://localhost:3000/sanpham/' + sp.id, sp);
  }

  getMotSanPham(id: number = 0) {
    return this.h.get('http://localhost:3000/sanpham/' + id);
  }
  //task
  getTa() {
    return this.h.get('http://localhost:3000/Task');
  }
  themTa(ta: any) {
    return this.h.post('http://localhost:3000/Task', ta);
  }
  xoaTa(id: number) {
    return this.h.delete('http://localhost:3000/Task/' + id);
  }
  suaTa(ta: any) {
    return this.h.put('http://localhost:3000/Task/' + ta.id, ta);
  }
  getMotTa(id: number = 0) {
    return this.h.get('http://localhost:3000/Task/' + id);
  }
  // taikhoan
  getAllTk() {
    return this.h.get('http://localhost:3000/user');
  }
  xoaTk(id: number) {
    return this.h.delete('http://localhost:3000/user/' + id);
  }
  tksua(id: any, data: any) {
    return this.h.patch('http://localhost:3000/user/' + id, data);
  }
}
