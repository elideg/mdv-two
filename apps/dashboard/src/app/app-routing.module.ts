import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: ''},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRouterModule { }
