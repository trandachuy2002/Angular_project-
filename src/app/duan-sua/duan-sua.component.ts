import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css'],
})
export class DuanSuaComponent implements OnInit {
  constructor(
    private daService: DuAnService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}
  listDuAn: any;
  listnv: any;
  idDA: number = Number(this.activeRouter.snapshot.params['id']);
  da: DuAn = <DuAn>{};
  ngOnInit(): void {
    this.daService.getMotDa(this.idDA).subscribe((data) => {
      this.da = data as DuAn;
    });
    this.daService.getDa().subscribe((data) => {
      this.listDuAn = data;
    });
  }
  daSua(da: any) {
    this.daService.suaDa(da).subscribe((data) => {
      alert('Sửa thành công');
      console.log('Sửa', data);
      this.router.navigate(['/admin/duan']);
    });
  }
}
