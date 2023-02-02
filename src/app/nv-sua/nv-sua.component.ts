import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css'],
})
export class NvSuaComponent implements OnInit {
  constructor(
    private nvService: NhanVienService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}
  idNV: number = Number(this.activeRouter.snapshot.params['id']);
  nv: NhanVien = <NhanVien>{};
  nvv: any;
  ngOnInit(): void {
    this.nvService.getMotNv(this.idNV).subscribe((data) => {
      this.nv = data as NhanVien;
    });
    this.nvService.getNv().subscribe((data) => {
      this.nvv = data;
    });
  }

  nvSua(nv: any) {
    this.nvService.suaNv(nv).subscribe((data) => {
      alert('Sửa thành công');
      console.log('Sửa', data);
      this.router.navigate(['/admin/nv']);
    });
  }
  capnhatNV() {
    // this.nvService.capnhatNhanVien(this.nv);
    // this.router.navigate(['/admin/nv']);
  }
}
