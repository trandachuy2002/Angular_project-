import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loai-sanpham',
  templateUrl: './loai-sanpham.component.html',
  styleUrls: ['./loai-sanpham.component.css'],
})
export class LoaiSanphamComponent implements OnInit {
  listLoai: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('http://localhost:3000/loaisp').subscribe((data) => {
      this.listLoai = data;
      console.log('Loại sản phẩm: ', data);
    });
  }
}
