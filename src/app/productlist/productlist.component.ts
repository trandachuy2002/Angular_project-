import { Component, OnInit } from '@angular/core';
import { SanPhamService } from '../san-pham.service';
import { ISanpham } from '../isanpham';
// import { DuLieuService } from '../du-lieu.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  constructor(
    private d: SanPhamService,
    private router: Router,
    private Location: Location
  ) {}
  listSanPham: any;

  ngOnInit(): void {
    this.listSanPham = this.d
      .getSanPham()
      .subscribe((data) => (this.listSanPham = data));
  }
  xoaSP(id: number) {
    // if (confirm('Xóa thật không') == true) {
    //   this.d.xoaSanPham(id).subscribe((data) => alert('Xóa thành công'));
    //   // this.Location.path();
    //   return;
    // }
    // this.router.navigate(['/admin/sp']);
    // const hoi = confirm('Bạn muốn xóa nó hả??');
    // if (hoi == false) {
    //   return false;
    // } else {
    //   alert('Chúc mừng bạn đã xóa nó thành công!');
    //   this.d.xoaSanPham(id).subscribe((data) => {
    //     this.router.navigate(['/admin/da']);
    //   });
    //   return false;
    // }
  }
}
