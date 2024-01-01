import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { DetailPostComponent } from './detail-post/detail-post.component';

const routes: Routes = [
  { path: 'detail-post/:id', component: DetailPostComponent,},
  {
    path:'',component:PostsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
