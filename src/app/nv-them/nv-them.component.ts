import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css'],
})
export class NvThemComponent implements OnInit {
  constructor(private nvService: NhanVienService, private router: Router) {}
  // frm3!: FormGroup;
  nv: NhanVien = <NhanVien>{};
  n: NhanVien = <NhanVien>{};
  listNV: any;
  themNv() {}
  nvthem(nv: any) {
    // var id = Number(nv.id);
    // var ho = nv.ho;
    // var ten = nv.ten;
    // var date = nv.date;
    // var phai = nv.phai;
    // var khuvuc = nv.khuvuc;

    this.nvService.themNv(nv).subscribe((data) => alert('Thêm thành công'));
    this.router.navigate(['/admin/nv']);
  }
  id: string = '';
  ho: string = '';
  ten: string = '';
  ngaysinh: string = '';
  phai: string = '';
  khuvuc: string = '';
  ngOnInit(): void {
    // this.frm3 = new FormGroup({
    //   id: new FormControl('', [
    //     Validators.minLength(1),
    //     Validators.maxLength(100),
    //   ]),
    //   ho: new FormControl('', [
    //     Validators.minLength(3),
    //     Validators.maxLength(15),
    //   ]),
    //   ten: new FormControl('', Validators.minLength(3)),
    //   ngaysinh: new FormControl('', Validators.minLength(8)),
    //   phai: new FormControl('', Validators.minLength(1)),
    //   khuvuc: new FormControl('', Validators.minLength(1)),
    // });
    this.nvService.getNv().subscribe((data) => {
      this.listNV = data;
    });
  }
}
