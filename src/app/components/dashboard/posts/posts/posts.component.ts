import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
categories: string[] = ['Nature', 'Music', 'Travelling', 'Cars', 'Technology', 'Tea & Coffee', 'Programming'];

posts : any = [];
selectedCategory: string = ''; 

  constructor(private postsService : PostsService){}

  ngOnInit(): void {
    this.getAllPosts();
  }
  

  getAllPosts(){
    this.postsService.getAllPosts().subscribe((res)=>{
      this.posts = res;
      // console.log("Get all posts response", res);
    })
  }


  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterPostsByCategory(category);
  }

  getPostsForAllCategories(): void {
    this.postsService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
        this.selectedCategory = ''; // Reset selected category when getting all categories
      }, error => {
        console.error(error);
      });
  }

  filterPostsByCategory(category: string): void {
    this.postsService.getPostsByCategory(category)
      .subscribe(posts => {
        this.posts = posts;
        this.selectedCategory = category; // Update selected category
      }, error => {
        console.error(error);
      });
  }

  getAllCategories(): void {
    this.getPostsForAllCategories();
  }

 

}
