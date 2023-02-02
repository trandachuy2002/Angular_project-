import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NhanVienService } from '../nhan-vien.service';
// import { DuLieuService } from '../du-lieu.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css'],
})
export class TaskSuaComponent implements OnInit {
  constructor(
    private taService: TaskService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private le: NhanVienService
  ) {}
  idTA: number = Number(this.activeRouter.snapshot.params['id']);
  ta: Task = <Task>{};
  listTa: any;
  ngOnInit(): void {
    // let kq = this.taService.getMotTask(this.idTA);
    // this.ta = kq as Task;
    this.taService.getMotTa(this.idTA).subscribe((data) => {
      this.ta = data as Task;
    });
    this.taService.getTa().subscribe((data) => {
      this.listTa = data;
    });
  }
  taSua(ta: any) {
    this.taService.suaTa(ta).subscribe((data) => {
      alert('Sửa thành công');
      console.log('Sửa', data);
      this.router.navigate(['/admin/task']);
    });
  }
  // capnhatTask() {
  //   this.taService.capnhatTask(this.ta);
  //   this.router.navigate(['/admin/task']);
  // }
}
