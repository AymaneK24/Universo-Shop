import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  Connexion() {

    const em = this.auth.email;
    const pas = this.auth.password;

    if (this.email && this.password) {
      if (this.email === em && this.password === pas) {
        this.auth.setToConnected();
       
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Please enter email and password');
    }
  }

}
