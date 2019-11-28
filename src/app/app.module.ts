import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GetuserComponent } from './getuser/getuser.component';
import { RegisterComponent } from './register/register.component';
import { GetComponent } from './pages/get/get.component';
import { LoginComponent } from './pages/login/login.component';
import { GetbookComponent } from './pages/getbook/getbook.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GetuserComponent,
    RegisterComponent,
    GetComponent,
    LoginComponent,
    GetbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
