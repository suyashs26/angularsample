import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductInfoPageComponent } from './product-info-page/product-info-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : '',component : NavbarComponent},
  {path : 'dashboard/:id',component : DashboardComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'product-page/:id1', component: ProductPageComponent },
  {path: 'product-info-page/:id1/:id', component: ProductInfoPageComponent },
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-page', component: AdminPageComponent },
  {path : 'login',component : LoginComponent},
 {path: 'change-password', component: ChangePasswordComponent },
  {path : 'register',component : RegisterComponent},
  {path: 'logout', component: LogoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
