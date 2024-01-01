import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:3001/api/posts';
  constructor(private http:HttpClient) { }


  getAllPosts(){
    return this.http.get(`${this.apiUrl}`);
  }


  getPostsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?category=${category}`);
  }
}
