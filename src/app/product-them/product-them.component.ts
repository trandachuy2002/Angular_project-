import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-them',
  templateUrl: './product-them.component.html',
  styleUrls: ['./product-them.component.css'],
})
export class ProductThemComponent implements OnInit {
  constructor(private d: SanPhamService, private router: Router) {}
  sp: ISanpham = <ISanpham>{};
  themSP() {
    // this.spService.themSanPham(this.sp);
    // this.router.navigate(['/admin/sp']);
  }

  spthem(sp: any) {
    var tensp = sp.tensp;
    var giasp = sp.giasp;
    var ngay = sp.ngay;
    var hinh = sp.hinh;
    var mota = sp.mota;

    this.d.themSanPham(sp).subscribe((data) => alert('Thêm thành công'));
    this.router.navigate(['/admin/sp']);
  }
  ngOnInit(): void {}
}
