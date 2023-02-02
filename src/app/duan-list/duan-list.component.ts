import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DuAnService } from '../du-an.service';
import { DuAn } from '../du-an';
import { Router } from '@angular/router';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css'],
})
export class DuanListComponent implements OnInit {
  @Output() chonDa = new EventEmitter();
  // listDuAn: DuAn[] = [];
  listDuAn: any;
  constructor(private da: DuAnService, private router: Router) {}

  ngOnInit(): void {
    this.listDuAn = this.da.getDa().subscribe((data) => (this.listDuAn = data));
    console.log(this.listDuAn);
  }
  xoaDa(id: number) {
    // if (confirm('Xóa thật không') == true) {
    //   this.da.xoaDa(id).subscribe((data) => alert('Xóa thành công'));
    //   this.router.navigate(['/admin/duan']);
    // }
    const hoi = confirm('Bạn muốn xóa nó hả??');
    if (hoi == false) {
      return false;
    } else {
      this.da.xoaDa(id).subscribe((data) => {
        alert('Chúc mừng bạn đã xóa nó thành công!');
        this.listDuAn = this.listDuAn.filter((da: any) => da.id != id);
      });
      return false;
    }
  }

  suaDA(da: any) {
    this.chonDa.emit(da);
  }
  Da: any;
  ganSP(Da: any) {
    this.Da = Da;
    console.log(this.Da);
  }
  // xoaDa(id: number = 0) {
  //   this.da.xoaDuAn(id);
  //   return false;
  // }
}
