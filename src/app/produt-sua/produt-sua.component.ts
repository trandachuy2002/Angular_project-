import { Component, OnInit } from '@angular/core';
import { ISanpham } from '../isanpham';
import { SanPhamService } from '../san-pham.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-produt-sua',
  templateUrl: './produt-sua.component.html',
  styleUrls: ['./produt-sua.component.css'],
})
export class ProdutSuaComponent implements OnInit {
  constructor(
    private spService: SanPhamService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}
  idSP: number = Number(this.activeRouter.snapshot.params['id']);
  sp: ISanpham = <ISanpham>{};

  ngOnInit(): void {
    this.spService.getMotSanPham(this.idSP).subscribe((data) => {
      this.sp = data as ISanpham;
    });
  }
  spSua(sp: any) {
    this.spService.suaSanPham(sp).subscribe((data) => {
      alert('Sửa thành công');
      console.log('Sửa', data);
      this.router.navigate(['/admin/sp']);
    });
  }
  capnhatSP() {
    // this.spService.capnhatSanPham(this.sp);
    // this.router.navigate(['/admin/sp']);
  }
}
