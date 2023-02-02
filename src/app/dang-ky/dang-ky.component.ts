import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as moment from 'moment';
const bcrypt = require('bcryptjs');
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css'],
})
export class DangKyComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  xulyDK(data: any) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.pw, salt);

    this.auth.dky(data.un, hash).subscribe(
      (res) => {
        var d = JSON.parse(res);
        console.log(d);

        console.log('Đăng ký thành công ', res);
        const expiresAt = moment().add(d.expiresIn, 'second');
        localStorage.setItem('id_token', d.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log('oops', error);
        this.router.navigateByUrl('/dangky');
      }
    );
  } //xulyDN
}
