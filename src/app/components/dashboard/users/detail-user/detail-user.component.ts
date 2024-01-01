import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
  user: any;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }
  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log('====================================');
    console.log(userId);
    console.log('====================================');
    if (userId) {
      this.usersService.getUserDetails(userId).subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
        
      });
    }
  }

}
