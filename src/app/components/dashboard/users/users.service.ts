import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAllUsers(){
    return this.http.get('http://localhost:3001/api/users/profile');
  }
  getUserDetails(userId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3001/api/users/profile/${userId}`);
  }

  addUser(model:User){
    return this.http.post('http://localhost:3001/api/auth/register/',model)
  }
}
