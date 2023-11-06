import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "../user-list/user-list.component";
import {UserFormComponent} from "../user-create-form/user-form.component";
import {AuthFormComponent} from "../auth-form/auth-form.component";
import {HomeComponent} from "../home-component/home.component";
import {CarVerticalListComponent} from "../cars/car-vertical-list/car-vertical-list.component";
import {UserExtraDataFormComponent} from "../user-exra-data-form/user-extra-data-form.component";
import {MyAkkComponent} from "../my-akk/my-akk.component";
import {MyOrdersComponent} from "../managment/my-orders/my-orders.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'rent_module/user/admin/all',component: UserListComponent},
  {path:'rent_module/user/create',component: UserFormComponent},
  {path: 'auth_module/authenticate', component: AuthFormComponent},
  {path: 'rent_module/car/cars', component: CarVerticalListComponent },
  {path: 'rent_module/extraData/add', component: UserExtraDataFormComponent},
  {path: 'myAkk/extraData/change', component:MyAkkComponent },
  {path: 'manage/orders', component: MyOrdersComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutesModule {
}
