import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { NhanVienService } from '../nhan-vien.service';
// import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private nvService: TaskService) {}
  listTa: Task[] = [];

  idTa: number = Number(this.route.snapshot.params['id']);
  ta = <Task>{}; //obj réng theo interface ISanpham
  ngOnInit(): void {
    // this.listSP = this.spService.getSanPham();
    // if (this.idTa < 0) return;

    // let kq = this.nvService.getMotTask(this.idTa);
    // if (kq == null) {
    //   this.ta = {} as Task;
    // } else {
    //   this.ta = kq as Task;
    // }
    if (this.idTa < 0) return;
    this.nvService.getMotTa(this.idTa).subscribe((data) => {
      this.ta = data as Task;
    });
  }
}
