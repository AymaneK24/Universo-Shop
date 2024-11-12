import { Component, OnInit , inject } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  authService = inject(AuthService);
  userName : any ;
  userEmail : any ;
  ngOnInit(): void {

    this.userName = this.authService.currentUserSig()?.username;
    this.userEmail = this.authService.currentUserSig()?.email;
  }



}
