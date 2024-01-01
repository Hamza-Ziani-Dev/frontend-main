import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
// import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PostsComponent,
    DetailPostComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    MaterialModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
