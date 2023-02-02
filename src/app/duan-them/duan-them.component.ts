import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css'],
})
export class DuanThemComponent implements OnInit {
  constructor(
    private daService: DuAnService,

    private router: Router
  ) {}
  da: DuAn = <DuAn>{};
  d: DuAn = <DuAn>{};
  themDa() {
    // this.daService.themDuAn(this.da);
    // this.router.navigate(['/admin/duan']);
  }
  listDuAn: any;
  listnv: any;
  ngOnInit(): void {
    this.listDuAn = this.daService
      .getDa()
      .subscribe((data) => (this.listDuAn = data));
    this.daService.getNV().subscribe((data) => {
      this.listnv = data;
    });
    // this.listDuAn = this.daService.getDa();
  }
  // id: string = '';
  // tenDuAn: string = '';
  // ngayStart: any = '';
  // tien: string = '';
  // leader: string = '';
  // thanhvien: string = '';

  // xuly(d: any) {
  //   this.daService.xuly(d);
  //   this.router.navigate(['/admin/duan']);
  // }
  dathem(da: DuAn) {
    // var tenDuAn = da.tenDuAn;
    // var ngayStart = da.ngayStart;
    // var tien = da.tien;
    // var leader = da.leader;
    // var thanhvien = da.thanhvien;
    this.daService.themDa(da).subscribe((data) => alert('Thêm thành công'));

    this.router.navigate(['/admin/duan']);
  }
}
