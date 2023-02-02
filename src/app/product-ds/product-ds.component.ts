import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { SanPhamService } from '../san-pham.service';
@Component({
  selector: 'app-product-ds',
  templateUrl: './product-ds.component.html',
  styleUrls: ['./product-ds.component.css'],
})
export class ProductDsComponent implements OnInit {
  @Output() chonSP = new EventEmitter();
  constructor(private d: SanPhamService, private router: Router) {}
  listSanPham: any;
  ngOnInit(): void {
    this.listSanPham = this.d
      .getSanPham()
      .subscribe((data) => (this.listSanPham = data));
  }
  xoaSP(id: number) {
    // if (confirm('Xóa thật không') == true) {
    //   this.d.xoaSanPham(id).subscribe((data) => alert('Xóa thành công'));
    // }
    const hoi = confirm('Bạn muốn xóa nó hả??');
    if (hoi == false) {
      return false;
    } else {
      this.d.xoaSanPham(id).subscribe((data) => {
        alert('Chúc mừng bạn đã xóa nó thành công!');
        this.listSanPham = this.listSanPham.filter((sp: any) => sp.id != id);
      });
      return false;
    }
  }
  suaSP(sp: any) {
    console.log(sp);
    this.chonSP.emit(sp);
  }
  sp: any;
  ganSP(sp: any) {
    this.sp = sp;
    console.log(this.sp);
  }
}

// xoaSP(id: number = 0) {
//   this.spSercive.xoaSanPham(id);
//   return false;
// }
