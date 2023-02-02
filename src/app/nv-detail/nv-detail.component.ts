import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';
@Component({
  selector: 'app-nv-detail',
  templateUrl: './nv-detail.component.html',
  styleUrls: ['./nv-detail.component.css'],
})
export class NvDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private nvService: NhanVienService
  ) {}
  listNV: NhanVien[] = [];
  idNV: number = Number(this.route.snapshot.params['id']);
  nv = <NhanVien>{}; //obj réng theo interface ISanpham
  ngOnInit(): void {
    if (this.idNV < 0) return;
    this.nvService.getMotNv(this.idNV).subscribe((data) => {
      this.nv = data as NhanVien;
    });
    // this.listSP = this.spService.getSanPham();
    // if (this.idNV < 0) return;
    // let kq = this.nvService.getMotNhanVien(this.idNV);
    // if (kq == null) {
    //   this.nv = {} as NhanVien;
    // } else {
    //   this.nv = kq as NhanVien;
    // }
  }
}
