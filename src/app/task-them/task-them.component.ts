import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
// import { DuLieuService } from '../du-lieu.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NhanVienService } from '../nhan-vien.service';
@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css'],
})
export class TaskThemComponent implements OnInit {
  constructor(
    private taService: TaskService,
    private router: Router,
    private le: NhanVienService
  ) {}
  ta: Task = <Task>{};
  d: Task = <Task>{};
  frm1!: FormGroup;
  nv: any;
  listTask: any;
  listNhanVien: any;
  listDa: any;
  ngOnInit(): void {
    this.frm1 = new FormGroup({
      id: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      tenTask: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      moTa: new FormControl('', Validators.minLength(3)),
      priority: new FormControl('', Validators.minLength(1)),
      status: new FormControl('', Validators.minLength(1)),
      duAnID: new FormControl('', Validators.minLength(1)),
      nhanvienID: new FormControl('', Validators.minLength(1)),
      leader: new FormControl('', Validators.minLength(1)),
    });
    this.listTask = this.taService
      .getTa()
      .subscribe((data) => (this.listTask = data));

    this.listNhanVien = this.le
      .getNv()
      .subscribe((data) => (this.listNhanVien = data));
    this.nv = this.le.getNv().subscribe((data) => (this.nv = data));
  }
  themTask(ta: any) {
    console.log(ta);
    var id = ta.id;
    var tenTask = ta.tensp;
    var moTa = ta.moTa;
    var priority = ta.priority;
    var status = ta.status;
    var duAnID = ta.duAnID;
    var nhanvienID = ta.nhanvienID;
    console.log(priority);

    this.taService.themTa(ta).subscribe((data) => {
      console.log(data);

      alert('Thêm thành công');
    });

    this.router.navigate(['/admin/task']);
  }
  id: string = '';
  tenTask: string = '';
  moTa: string = '';
  duAnID: string = '';
  nhanvienID: string = '';
  priority: string = '';
  status: string = '';
  // xuly(d: any) {
  //   this.taService.xuly(d);
  //   this.router.navigate(['/admin/task']);
  // }
}
