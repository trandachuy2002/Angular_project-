import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductlistdetailComponent } from './productlistdetail/productlistdetail.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProdutSuaComponent } from './produt-sua/produt-sua.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { DuanDetailComponent } from './duan-detail/duan-detail.component';
import { NvDetailComponent } from './nv-detail/nv-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { BaoveGuard } from './baove.guard';
import { DowLoadComponent } from './dow-load/dow-load.component';
import { DstaikhoanComponent } from './dstaikhoan/dstaikhoan.component';
const routes: Routes = [
  {
    path: '',
    // redirectTo: 'login',
    // pathMatch: 'full',
    component: HomeComponent,
  },
  // { path: 'doipass', component: DoiPassComponent, canActivate: [BaoveGuard] },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'dangky', component: DangKyComponent },
  { path: 'taikhoan', component: DstaikhoanComponent },
  { path: 'doipass', component: DoiPassComponent, canActivate: [BaoveGuard] },
  { path: 'download', component: DowLoadComponent, canActivate: [BaoveGuard] },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sanpham',
    component: ProductlistComponent,
  },

  {
    path: 'sanpham/:id',
    component: ProductlistdetailComponent,
  },
  {
    path: 'lienhe',
    component: LienheComponent,
  },
  {
    path: 'dangnhap',
    component: DangnhapComponent,
  },
  {
    path: 'admin/duan',
    component: DuanListComponent,
  },

  {
    path: 'admin/duan/:id',
    component: DuanDetailComponent,
  },
  {
    path: 'admin/themduan',
    component: DuanThemComponent,
  },
  {
    path: 'admin/suaDa/:id',
    component: DuanSuaComponent,
  },
  {
    path: 'admin/nv',
    component: NvListComponent,
  },
  {
    path: 'admin/nv/:id',
    component: NvDetailComponent,
  },
  {
    path: 'admin/themnv',
    component: NvThemComponent,
  },
  {
    path: 'admin/suanv/:id',
    component: NvSuaComponent,
  },
  {
    path: 'admin/sp',
    component: ProductDsComponent,
  },
  {
    path: 'admin/themSP',
    component: ProductThemComponent,
  },

  {
    path: 'admin/loaisp',
    component: LoaiSanphamComponent,
  },
  {
    path: 'admin/suaSP/:id',
    component: ProdutSuaComponent,
  },
  //
  {
    path: 'admin/task',
    component: TaskListComponent,
  },
  {
    path: 'admin/task/:id',
    component: TaskDetailComponent,
  },
  {
    path: 'admin/themTask',
    component: TaskThemComponent,
  },
  {
    path: 'admin/suaTask/:id',
    component: TaskSuaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
