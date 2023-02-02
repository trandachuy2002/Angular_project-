import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { NhanVienService } from '../nhan-vien.service';
import { NhanVien } from '../nhan-vien';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Output() chonDa = new EventEmitter();
  constructor(private taService: TaskService, private le: NhanVienService) {}
  // listTask: Task[] = [];
  listTask: any;
  listNhanVien: any;
  an = true;
  ngOnInit(): void {
    this.listTask = this.taService
      .getTa()
      .subscribe((data) => (this.listTask = data));
    this.listNhanVien = this.le
      .getNv()
      .subscribe((data) => (this.listNhanVien = data));
  }
  xoaTa(id: number) {
    // if (confirm('Xóa thật không') == true) {
    //   this.da.xoaDa(id).subscribe((data) => alert('Xóa thành công'));
    //   this.router.navigate(['/admin/duan']);
    // }
    const hoi = confirm('Bạn muốn xóa nó hả??');
    if (hoi == false) {
      return false;
    } else {
      this.taService.xoaTa(id).subscribe((data) => {
        alert('Chúc mừng bạn đã xóa nó thành công!');
        this.listTask = this.listTask.filter((ta: any) => ta.id != id);
      });
      return false;
    }
  }

  suaTa(Ta: any) {
    this.chonDa.emit(Ta);
  }
  Ta: any;
  ganTA(Ta: any) {
    this.Ta = Ta;
    console.log(this.Ta);
  }
  // xoaTa(id: number = 0) {
  //   this.taService.xoaTask(id);
  //   return false;
  // }
}
