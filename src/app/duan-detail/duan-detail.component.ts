import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuAnService } from '../du-an.service';
import { DuAn } from '../du-an';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-duan-detail',
  templateUrl: './duan-detail.component.html',
  styleUrls: ['./duan-detail.component.css'],
})
export class DuanDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private daService: DuAnService) {}
  listDA: DuAn[] = [];
  idDA: number = Number(this.route.snapshot.params['id']);
  da = <DuAn>{}; //obj réng theo interface ISanpham
  ngOnInit(): void {
    if (this.idDA < 0) return;
    this.daService.getMotDa(this.idDA).subscribe((data) => {
      this.da = data as DuAn;
    });
    // this.listSP = this.spService.getSanPham();
    // if (this.idDA < 0) return;
    // let kq = this.daService.getMotDuAn(this.idDA);
    // if (kq == null) {
    //   this.da = {} as DuAn;
    // } else {
    //   this.da = kq as DuAn;
    // }
  }
}
