import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './pages/home/home.component';
import { GeneralComponent } from './pages/general/general.component';
import { UserComponent } from './pages/user/user.component';
import { HeaderComponent } from './shared/header/header.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {AuthService} from "./services/auth/auth.service";
import { MyformComponent } from './pages/myform/myform.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MyformCandeactivateGuard} from "./pages/myform/myform-candeactivate.guard";
import {UserCanactivateGuard} from "./pages/user/user-canactivate.guard";
import {TodoService} from "./services/todo/todo.service";
import { TodoCardComponent } from './shared/todo-card/todo-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PublicTodosComponent } from './pages/public-todos/public-todos.component';
import {HttpClientModule} from "@angular/common/http";
import {PublicTodosResolver} from "./pages/public-todos/public-todos.resolver";
import { TopicCardComponent } from './pages/home/topic-card/topic-card.component';
import { PopupComponent } from './shared/popup/popup.component';
import {PopupService} from "./shared/popup/popup.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralComponent,
    UserComponent,
    HeaderComponent,
    SignInComponent,
    MyformComponent,
    TodoCardComponent,
    NotFoundComponent,
    PublicTodosComponent,
    TopicCardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TodoService,
    PublicTodosResolver,
    MyformCandeactivateGuard,
    UserCanactivateGuard,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
