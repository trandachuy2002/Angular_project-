import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as moment from 'moment';
import { log } from 'console';
const bcrypt = require('bcryptjs');
@Component({
  selector: 'app-doi-pass',
  templateUrl: './doi-pass.component.html',
  styleUrls: ['./doi-pass.component.css'],
})
export class DoiPassComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  id: string = '';
  ngOnInit(): void {
    const token: string = localStorage.getItem('id_token') || '';
    const payload: any = JSON.parse(atob(token.split('.')[1]));
    this.id = JSON.parse(payload['sub']).id;
  }
  xulyMK(data: any) {
    if (data.pwNew == data.pwNew2) {
      const salt = bcrypt.genSaltSync(10);
      const hashNew = bcrypt.hashSync(data.pwNew, salt);
      this.auth.checkPass(this.id).subscribe((res: any) => {
        if (bcrypt.compareSync(data.pwOld, res.pw)) {
          this.auth.checkPass(this.id).subscribe((res: any) => {
            this.auth.doiMK(this.id, { pw: hashNew }).subscribe((data) => {
              alert('Sửa thành công');
            });
          });
        } else {
          alert('Mật khẩu cũ không đúng');
        }
      });
    } else {
      alert('Hai mật khẩu không khớp nhau');
    }
  } //xulyDN
}
