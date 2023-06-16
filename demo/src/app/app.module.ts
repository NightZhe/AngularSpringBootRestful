import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' // 引入HttpClientModule



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { DailyTranctionStockComponent } from './daily-tranction-stock/daily-tranction-stock.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'exchange/getStockDayAll', component: DailyTranctionStockComponent },
  { path: 'hello', component: HelloComponent },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    IndexComponent,
    ErrorComponent,
    DailyTranctionStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
