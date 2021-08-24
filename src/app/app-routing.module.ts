import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {GeneralComponent} from "./pages/general/general.component";
import {UserComponent} from "./pages/user/user.component";
import {UserCanactivateGuard} from "./pages/user/user-canactivate.guard";
import {MyformCandeactivateGuard} from "./pages/myform/myform-candeactivate.guard";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MyformComponent} from "./pages/myform/myform.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {PublicTodosComponent} from "./pages/public-todos/public-todos.component";
import {PublicTodosResolver} from "./pages/public-todos/public-todos.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [UserCanactivateGuard]
  },
  {
    path: 'myform',
    component: MyformComponent,
    canDeactivate: [MyformCandeactivateGuard]
  },
  {
    path: 'public-todos',
    component: PublicTodosComponent,
    resolve: {
      todos: PublicTodosResolver
    }
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
