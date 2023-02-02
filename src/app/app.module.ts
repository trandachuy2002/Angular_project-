import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductlistdetailComponent } from './productlistdetail/productlistdetail.component';
import { FormsModule } from '@angular/forms';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { NotfoundComponent } from './notfound/notfound.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { DowLoadComponent } from './dow-load/dow-load.component';
import { DstaikhoanComponent } from './dstaikhoan/dstaikhoan.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LienheComponent,
    ProductlistComponent,
    ProductlistdetailComponent,
    DangnhapComponent,
    NotfoundComponent,
    ProductDsComponent,
    ProductThemComponent,
    ProdutSuaComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    NvListComponent,
    NvSuaComponent,
    NvThemComponent,
    TaskListComponent,
    TaskSuaComponent,
    TaskThemComponent,
    DuanDetailComponent,
    NvDetailComponent,
    TaskDetailComponent,
    LoginComponent,
    SignupComponent,
    LoaiSanphamComponent,
    DangKyComponent,
    DoiPassComponent,
    DowLoadComponent,
    DstaikhoanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
