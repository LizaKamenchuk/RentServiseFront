import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './main-component/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {HttpHeadersInterceptor} from "./interceptor/http-headers-interceptor";
import {CarsModule} from "./cars/cars.module";
import { UserExtraDataFormComponent } from './user-exra-data-form/user-extra-data-form.component';
import {MyAkkModule} from "./my-akk/my-akk.module";
import {ManagementModule} from "./managment/management.module";


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    AuthFormComponent,
    HomeComponent,
    ErrorFormComponent,
    SearchByDateComponent,
    UserExtraDataFormComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    RoutesModule, HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    CarsModule,
    MyAkkModule,
    ManagementModule
  ],
  providers: [
    UserService,
    AuthService,
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class HomeModule {
}
