import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asm_';
  sp: any;
  ganSP(sp: any) {
    this.sp = sp;
    console.log(this.sp);
  }
  constructor(private auth: AuthService, private router: Router) {}
  thoat() {
    this.auth.thoat();
    this.router.navigate(['/dangnhap']);
  }
  daDangNhap() {
    const token: string = localStorage.getItem('id_token') || '';
    if (token == '') return;
    const payload: any = JSON.parse(atob(token.split('.')[1]));
    const admin = JSON.parse(payload['sub']).admin;
    if (admin) return 'admin';
    return 'nv';
    // return this.auth.daDangNhap();
  }
}
