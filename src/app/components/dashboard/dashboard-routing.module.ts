import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  
  { path: '', component: LayoutComponent,
  children:[
    {path:'posts', loadChildren: () => import(`./posts/posts.module`).then(m => m.PostsModule) },
    {path:'users', loadChildren: () => import(`./users/users.module`).then(m => m.UsersModule) },
  ]
 },
  
  // { path: '**', redirectTo:"products" , pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
