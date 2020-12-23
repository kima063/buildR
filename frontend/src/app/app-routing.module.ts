import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRoutineComponent } from './view-routine/view-routine.component';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';
import { LoginRoutineComponent } from './login-routine/login-routine.component';
import { LogoutRoutineComponent } from './logout-routine/logout-routine.component';
const routes: Routes = [
  {path: 'view', component: ViewRoutineComponent},

  {path: 'edit', component: EditRoutineComponent},
  {path: 'login', component: LoginRoutineComponent},
  {path: 'logout', component: LogoutRoutineComponent},
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
