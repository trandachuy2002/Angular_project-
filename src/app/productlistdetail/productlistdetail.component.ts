import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanPhamService } from '../san-pham.service';

import { ISanpham } from '../isanpham';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-productlistdetail',
  templateUrl: './productlistdetail.component.html',
  styleUrls: ['./productlistdetail.component.css'],
})
export class ProductlistdetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private spService: SanPhamService
  ) {}
  listSP: ISanpham[] = [];
  idSP: number = Number(this.route.snapshot.params['id']);
  sp = <ISanpham>{}; //obj réng theo interface ISanpham
  ngOnInit(): void {
    if (this.idSP < 0) return;
    this.spService.getMotSanPham(this.idSP).subscribe((data) => {
      this.sp = data as ISanpham;
    });
  }
}
