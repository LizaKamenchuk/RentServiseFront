import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './main-component/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RoutesModule} from "./routes/routes.module";
import {UserFormComponent} from "./user-create-form/user-form.component";
import {UserListComponent} from './user-list/user-list.component';
import {UserService} from "./user-service/user.service";
import {AuthFormComponent} from './auth-form/auth-form.component';
import {AuthService} from "./auth-service/auth.service";
import {LocalStorageService} from "./localStorage-service/local-storage.service";
import { HomeComponent } from './home-component/home.component';
import { ErrorFormComponent } from './error-form/error-form/error-form.component';
import { SearchByDateComponent } from './searchByDate/searchByDate.component';
import {HomeModule} from "./home.module";
import {CarsModule} from "./cars/cars.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RoutesModule, HttpClientModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
