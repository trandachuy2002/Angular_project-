import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilde: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilde.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password == this.loginForm.value.password
        );
      });
      if (user) {
        alert('Đăng nhập thành công');
        this.loginForm.reset();
        this.router.navigate(['home']);
      } else {
        alert('Không có tài khoản');
      }
      // },
      // (err) => {
      //   alert('some thing wen wrong');
      // }
    });
  }
}
