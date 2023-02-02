import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { DuAnService } from '../du-an.service';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() chonDa = new EventEmitter();
  listDuAn: any;
  listNhanVien: any;
  listTask: any;
  listSanPham: any;
  constructor(
    private da: DuLieuService,
    private nv: DuLieuService,
    private ta: DuLieuService,
    private sp: DuLieuService
  ) {}

  ngOnInit(): void {
    this.listDuAn = this.da.getDa().subscribe((data) => (this.listDuAn = data));
    this.listNhanVien = this.nv
      .getNv()
      .subscribe((data) => (this.listNhanVien = data));
    this.listTask = this.ta.getTa().subscribe((data) => (this.listTask = data));
    this.listSanPham = this.sp
      .getSanPham()
      .subscribe((data) => (this.listSanPham = data));
  }
}
