import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NhanVienService } from '../nhan-vien.service';
import { NhanVien } from '../nhan-vien';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css'],
})
export class NvListComponent implements OnInit {
  @Output() chonNV = new EventEmitter();
  constructor(private nvService: NhanVienService) {}
  listNhanVien: any;

  ngOnInit(): void {
    this.listNhanVien = this.nvService
      .getNv()
      .subscribe((data) => (this.listNhanVien = data));
  }
  xoaNV(id: number) {
    // if (confirm('Xóa thật không') == true) {
    //   this.nvService.xoaNv(id).subscribe((data) => alert('Xóa thành công'));
    // }
    const hoi = confirm('Bạn muốn xóa nó hả??');
    if (hoi == false) {
      return false;
    } else {
      this.nvService.xoaNv(id).subscribe((data) => {
        alert('Chúc mừng bạn đã xóa nó thành công!');
        this.listNhanVien = this.listNhanVien.filter((nv: any) => nv.id != id);
      });
      return false;
    }
  }
  suaNV(nv: any) {
    console.log(nv);
    this.chonNV.emit(nv);
  }
  nv: any;
  ganNV(nv: any) {
    this.nv = nv;
    console.log(this.nv);
  }
}
