import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private h: HttpClient) {}
  getTa() {
    return this.h.get('http://localhost:3000/Task');
  }
  themTa(ta: any) {
    return this.h.post('http://localhost:3000/Task', ta);
  }
  xoaTa(id: number) {
    return this.h.delete('http://localhost:3000/Task/' + id);
  }
  suaTa(ta: any) {
    return this.h.put('http://localhost:3000/Task/' + ta.id, ta);
  }
  getMotTa(id: number = 0) {
    return this.h.get('http://localhost:3000/Task/' + id);
  }
}
