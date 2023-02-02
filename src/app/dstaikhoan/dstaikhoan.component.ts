import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-dstaikhoan',
  templateUrl: './dstaikhoan.component.html',
  styleUrls: ['./dstaikhoan.component.css'],
})
export class DstaikhoanComponent implements OnInit {
  constructor(private dl: DuLieuService, private router: Router) {}
  listTk: any;
  role: any = ['Khách hàng', 'Amin'];
  ngOnInit(): void {
    this.listTk = this.dl.getAllTk().subscribe((data) => (this.listTk = data));
    console.log(this.listTk);
  }
  xoaTk(id: number) {
    // if (confirm('Xóa thật không') == true) {
    //   this.da.xoaDa(id).subscribe((data) => alert('Xóa thành công'));
    //   this.router.navigate(['/admin/duan']);
    // }
    const hoi = confirm('Bạn muốn xóa nó hả??');
    if (hoi == false) {
      return false;
    } else {
      this.dl.xoaTk(id).subscribe((data) => {
        alert('Chúc mừng bạn đã xóa nó thành công!');
        this.listTk = this.listTk.filter((dl: any) => dl.id != id);
      });
      return false;
    }
  }
  // tkSua(da: any) {
  //   this.dl.tksua(da).subscribe((data) => {
  //     alert('Sửa thành công');
  //     console.log('Sửa', data);
  //     this.router.navigate(['/admin/duan']);
  //   });
  // }
  onOptionsSelected(value: string) {
    const data = value.split('-');
    this.dl.tksua(data[1], { admin: Number(data[0]) }).subscribe((data) => {
      alert('Chúc mừng bạn đã cập nhật thành công!');
    });
  }
}
